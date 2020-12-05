import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Post} from './Post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: string[] = ['Ryan', 'Joe', 'Cameron'];
  name: String = 'Ray Ray';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor(private dataService: DataService) {
    this.age = 28;
    this.address = { street: 'Margalida Monlau', city: 'Palma' };
    this.hobbies = ['swim', 'read', 'write'];
    this.dataService.getData().subscribe(data => {
      this.posts = data
    })
  }

  sayHello() {
    alert('Hello!');
  }

  addUser(newUser: { value: string }) {
    this.users.push(newUser.value);
    newUser.value = '';
    return false;
  }
  deleteUser(user: string) {
    for (let index = 0; index < this.users.length; index++) {
      if (user == this.users[index]) {
        this.users.splice(index, 1);
      }
    }
  }

  posts:Post[] = [];

}
