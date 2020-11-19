import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable()
export class UsersService {
  
  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.url);
  }
}
