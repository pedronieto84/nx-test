import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {IonicModule} from '@ionic/angular'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
