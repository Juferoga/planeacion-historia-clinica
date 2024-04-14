import { BloodType } from "./bloodType";

export class Person {
  names: string = '';
  lastnames: string = '';
  idNumber: string = '';
  birthDate: string = new Date().toISOString().split('T')[0];
  gender: string | null = null;
  profession: string = '';
  civilState: string = '';
  scholarship: string = '';
  address: string = '';
  phone: number = 0;

  constructor(names: string, lastnames: string, idNumber: string, gender: string | null, profession: string, civilState: string, scholarship: string, address: string, phone: number) {
      this.names = names;
      this.lastnames = lastnames;
      this.idNumber = idNumber;
      this.gender = gender;
      this.profession = profession;
      this.civilState = civilState;
      this.scholarship = scholarship;
      this.address = address;
      this.phone = phone;
  }
}

export class User extends Person {
  ethnicity: string = '';
  bloodType: BloodType;
  haveAttendant: boolean = false;
  attendant: Person;

  constructor(names: string, lastnames: string, idNumber: string, gender: string | null, profession: string, civilState: string, scholarship: string, address: string, phone: number, ethnicity: string, bloodType: BloodType, haveAttendant: boolean, attendant: Person) {
      super(names, lastnames, idNumber, gender, profession, civilState, scholarship, address, phone);
      this.ethnicity = ethnicity;
      this.bloodType = bloodType;
      this.haveAttendant = haveAttendant;
      this.attendant = attendant;
  }
}
