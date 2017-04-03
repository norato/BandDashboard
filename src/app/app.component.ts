import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en-US']);
    translate.setDefaultLang('en-US');

    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en-US/) ? browserlang : 'en-US');

  }
}
