export class BloodType {
  group: string = '';
  rh: string = '';

  constructor(group: string, rh: string) {
      this.group = group;
      this.rh = rh;
  }
}
