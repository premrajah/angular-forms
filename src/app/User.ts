export class User {
  constructor(
    // short hand type-script fields for constructors 
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public timePreference: string,
    public subscribe: boolean
  ) { }
}
