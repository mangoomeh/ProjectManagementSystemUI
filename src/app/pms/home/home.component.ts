import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userId = this.auth.getUserId();
    this.userService.getUserById(userId).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
      }
    })
    
  }

}
