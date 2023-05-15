import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { User } from '../../../../libs/user-interface/src/index'
import { User} from '@nx-test/user-interface'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';
  user:User = {
    email:'adsfasd',
    password: 'asdfasd'
  }
}
