import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotExistsComponent } from './not-exists/not-exists.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    PrivacyComponent,
    NotExistsComponent,
  ],
  imports: [ 
    BrowserModule, 
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {}},
      { path: 'privacy', component: PrivacyComponent, data: {} },
      { path: '**', component: NotExistsComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  bootstrap: [ 
    AppComponent 
  ],
})
export class AppModule { }
