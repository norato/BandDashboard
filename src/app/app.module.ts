import { SharedModule } from './shared/shared.module';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from 'angularfire2';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyAwis4GoiF7MCKBIVe-GHIv37ReUAsHOTE',
  authDomain: 'band-dashboard.firebaseapp.com',
  databaseURL: 'https://band-dashboard.firebaseio.com',
  projectId: 'band-dashboard',
  storageBucket: 'band-dashboard.appspot.com',
  messagingSenderId: '644190313174'
};

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]

      }
    }),
    Angular2FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
