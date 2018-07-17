import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.authService.subscribeAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['dashboard'])
      }
      else {
        this.router.navigate(['login'])
      }
    })
  }
}
