import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en']);
  }

  ngOnInit(): void {
    let userLang = navigator.language ? navigator.language.substring(0, 2) : 'es';
    this.translate.use(userLang);
    this.setFlag(userLang);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.setFlag(lang);
  }

  setFlag(lang: string): void {
    let flagMx = document.getElementById('flagMx');
    let flagEn = document.getElementById('flagEn');
  
    if(lang == 'es') {
      flagMx ? flagMx.style.filter = "none" : null;
      flagEn ? flagEn.style.filter = "brightness(0.5)" : null;
    } else if (lang == 'en') {
      flagEn ? flagEn.style.filter = "none" : null;
      flagMx ? flagMx.style.filter = "brightness(0.5)" : null;
    }
  }
}
