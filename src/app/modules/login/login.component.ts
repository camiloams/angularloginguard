import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  isLogic:boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
 
  }

  setUser(){

    console.log('user', this.user);

  }

  getUser(){
    this.userService.getUser().subscribe(
      data => {
        if(data.find(buleano => buleano.name===this.user.name && buleano.pws===this.user.pws) ){
          this.isLogic = true;
         
        }
        
        console.log('isLogin: ',this.isLogic) // === es comparacion de tipo y valor interior
      },
      error => {
        console.log('el error es: ',error);
      }
    );

  }
}