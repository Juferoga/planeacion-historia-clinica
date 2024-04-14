import { Allergy } from "./allergy";

export class Disease extends Allergy {
  since: string = '';
  sinceDate: string = new Date().toDateString().split('T')[0];
  cause: string = '';
  characteristics: string = '';
  adds: string = '';
  modifiers: string = '';

  constructor(name: string, type: string, description: string, severity: string, detectionDate: string, test: string[], treatment: string, state: string, since: string, sinceDate: string, cause: string, characteristics: string, adds: string, modifiers: string) {
      super(name, type, description, severity, detectionDate, test, treatment, state);
      this.since = since;
      this.sinceDate = sinceDate;
      this.cause = cause;
      this.characteristics = characteristics;
      this.adds = adds;
      this.modifiers = modifiers;
  }
}
