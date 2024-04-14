export class Surgery {
  name: string = '';
  type: string = '';
  description: string = '';
  since: string = '';
  cause: string = '';
  treatment: string = '';

  constructor(name: string, type: string, description: string, since: string, cause: string, treatment: string) {
      this.name = name;
      this.type = type;
      this.description = description;
      this.since = since;
      this.cause = cause;
      this.treatment = treatment;
  }
}
