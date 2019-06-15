export class Contact {
  public id: number;
  public name: string;
  public surname: string;
  public phoneNumber: string;

  public constructor() {
    this.name = '';
    this.surname = '';
    this.phoneNumber = '';
  }
}
