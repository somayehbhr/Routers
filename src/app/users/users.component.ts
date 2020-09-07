import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  
  onClick(){
    this.router.navigate(['/accounts']);
  }
}
