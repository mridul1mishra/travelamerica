export interface Scenario {
  icon: string;
  title: string;
  description: string;
  do: string[];
  dont: string[];
  anchor: string;
}
export interface ScenarioSection {
  title: string;
  cards: Scenario[];
}