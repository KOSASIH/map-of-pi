import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: string[] = ['en', 'es', 'fr'];
  selectedLanguage: string = 'en';
  welcomeMessage: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(language => {
      this.selectedLanguage = language;
      this.updateWelcomeMessage();
    });
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  updateWelcomeMessage(): void {
    this.welcomeMessage = this.languageService.getTranslation('welcome');
  }
}
