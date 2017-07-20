import { Component} from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { LoggerService } from './shared/services/logger/logger.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'app';

  config: any;

  constructor(protected readonly configService: ConfigService,
              protected logger: LoggerService,
              protected readonly translate: TranslateService) {
  }

  ngOnInit(): void {
    this.config = this.configService.getSettings();
    const defaultLanguage = this.configService.getSettings('i18n.defaultLanguage');
    this.translate.addLangs(this.configService.getSettings('i18n.availableLanguages')
      .map((language: any) => language.code));
    this.translate.setDefaultLang(defaultLanguage.code);
    this.setLanguage(defaultLanguage);
  }

  private setLanguage(language: any): void {
    this.translate.use(language.code).subscribe(() => {
      //
    });
  }
}
