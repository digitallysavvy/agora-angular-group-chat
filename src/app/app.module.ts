import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

import { AppComponent } from './app.component';

const agoraConfig: AgoraConfig = {
  AppID: 'b3cede3bf746408d8b3aa299fd74c7ac',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
