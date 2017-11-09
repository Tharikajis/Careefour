import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
 public logo = '../assets/img/logo.png';
  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onclickSearch(status) {
    this.status = !this.status;
    return false;
  }

}
