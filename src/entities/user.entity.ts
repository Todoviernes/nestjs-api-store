export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
