import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-test-nx-welcome',
  template: `<div>Hola app2</div><nx-test-login-component></nx-test-login-component>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
