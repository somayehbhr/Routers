import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Routers';

  // constructor(private router: Router){}
  constructor(private router: Router){}

  ngOnInit(): void {
  //  setTimeout(()=>{
  //   this.router.navigate(['/users']);
  //  },5000)
  }

  onClick(){
    this.router.navigate(['/accounts']);
  }
}
