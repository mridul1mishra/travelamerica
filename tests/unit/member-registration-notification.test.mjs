import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypescriptModule } from './load-typescript-module.mjs';
const { notifyMemberRegistration } = await loadTypescriptModule('../../app/lib/member-registration-notification.ts', { omitServerOnly: true });

test('registration notification goes only to the owner and contains name/email without credentials', async () => {
  const member = { name: 'Test Member', email: 'member@example.test', password: 'never-send-this' };
  await notifyMemberRegistration(member, async (_url, options) => {
    const body = JSON.parse(options.body);
    assert.deepEqual(body.to, ['mridul1mishra@gmail.com']);
    assert.match(body.text_body, /Test Member/);
    assert.match(body.text_body, /member@example.test/);
    assert.ok(!options.body.includes(member.password));
    assert.equal(options.cache, 'no-store');
    return Response.json({ data: { succeeded: 1, failed: 0 } });
  }, { SMTP2GO_API_KEY: 'test-secret' });
});

test('mail failures are swallowed and logs do not expose credentials or personal data', async () => {
  const original = console.error;
  const logs = [];
  console.error = (...args) => logs.push(args);
  try {
    await notifyMemberRegistration({ name: 'Private Name', email: 'private@example.test' }, async () => { throw new Error('private-secret'); }, { SMTP2GO_API_KEY: 'private-secret' });
    assert.deepEqual(logs, [['[member-auth] REGISTRATION_NOTIFICATION_FAILED']]);
  } finally { console.error = original; }
});
