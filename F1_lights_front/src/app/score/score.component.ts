import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  users: User[] = [];
  currentuser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }
}
