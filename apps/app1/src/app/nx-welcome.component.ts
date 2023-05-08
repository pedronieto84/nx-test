import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent} from '../../../../libs/login/src/index'

@Component({
  selector: 'nx-test-nx-welcome',
  standalone: true,
  imports: [CommonModule, LoginComponentComponent],
  template: `<div>Hola app1</div><nx-test-login-component></nx-test-login-component>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
