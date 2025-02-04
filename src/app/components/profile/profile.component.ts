import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})
export class ProfileComponent  implements OnInit {

  @Input() username: string = '';
  @Input() points: number = 0;
  @Input() avatarUrl: string = '';

  constructor() { }

  ngOnInit() {}

}
