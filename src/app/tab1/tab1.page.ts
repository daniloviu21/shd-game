import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  profile = [
    {username: 'johndoe', points: 45678, avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'},
  ]

  constructor() {}

}
