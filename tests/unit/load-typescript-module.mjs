import { readFileSync } from "node:fs";
import ts from "typescript";

// Load isolated TypeScript modules without invoking production accessors. The
// opt-in import resolver also supports injected auth tests with an in-memory DB.
export async function loadTypescriptModule(relativePath, { resolveImports = false, omitServerOnly = false } = {}) {
  const filename = new URL(relativePath, import.meta.url);
  function compiledModuleUrl(sourceUrl) {
    const { outputText, diagnostics } = ts.transpileModule(readFileSync(sourceUrl, "utf8"), {
      fileName: sourceUrl.pathname,
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
      reportDiagnostics: true,
    });
    const errors = diagnostics?.filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error) ?? [];
    if (errors.length) throw new Error(ts.formatDiagnosticsWithColorAndContext(errors, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: (file) => file,
      getNewLine: () => "\n",
    }));
    let source = outputText;
    if (omitServerOnly) source = source.replace(/^import ["']server-only["'];?\s*$/gm, "");
    if (resolveImports) {
      source = source.replace(/\b(from\s+|import\s+)["']([^"']+)["']/g, (statement, prefix, specifier) => {
        if (specifier.startsWith(".")) {
          const dependency = new URL(specifier.endsWith(".ts") ? specifier : `${specifier}.ts`, sourceUrl);
          return `${prefix}${JSON.stringify(compiledModuleUrl(dependency))}`;
        }
        if (specifier.startsWith("node:")) return statement;
        return `${prefix}${JSON.stringify(import.meta.resolve(specifier))}`;
      });
    }
    return `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  }
  return import(compiledModuleUrl(filename));
}
