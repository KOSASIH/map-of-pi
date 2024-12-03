import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en'); // Default language
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      welcome: 'Welcome',
      selectLanguage: 'Select Language',
      submit: 'Submit',
      // Add more translations as needed
    },
    es: {
      welcome: 'Bienvenido',
      selectLanguage: 'Seleccionar idioma',
      submit: 'Enviar',
      // Add more translations as needed
    },
    fr: {
      welcome: 'Bienvenue',
      selectLanguage: 'Choisir la langue',
      submit: 'Soumettre',
      // Add more translations as needed
    }
  };

  constructor() {}

  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
  }

  getTranslation(key: string): string {
    const currentLanguage = this.currentLanguageSubject.value;
    return this.translations[currentLanguage][key] || key;
  }
}
