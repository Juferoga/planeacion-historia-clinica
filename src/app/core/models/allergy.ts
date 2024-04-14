export class Allergy {
  name: string = '';
  type: string = '';
  description: string = '';
  severity: string = '';
  detectionDate: string = '';
  test: string[] = [];
  treatment: string = '';
  state: string = '';  // active, controlled, overcome

  constructor(name: string, type: string, description: string, severity: string, detectionDate: string, test: string[], treatment: string, state: string) {
      this.name = name;
      this.type = type;
      this.description = description;
      this.severity = severity;
      this.detectionDate = detectionDate;
      this.test = test;
      this.treatment = treatment;
      this.state = state;
  }
}
