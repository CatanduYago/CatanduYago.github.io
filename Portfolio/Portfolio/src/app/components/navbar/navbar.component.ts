import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentLanguage: string = 'es'; // Idioma por defecto
  languageIcon: string = 'assets/espana.png'; // Imagen del idioma por defecto
  isMenuOpen = false;
  cvurl: string = 'assets/Yago_CV.pdf';

  toggleLanguage(): void {
    if (this.currentLanguage === 'es') {
      this.currentLanguage = 'en';
      this.languageIcon = 'assets/eeuu.png'; // Cambia la imagen a inglés
    } else {
      this.currentLanguage = 'es';
      this.languageIcon = 'assets/espana.png'; // Cambia la imagen a español
    }
    this.updateLanguage();
  }

  updateLanguage(): void {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach((el) => {
      const lang = (el as HTMLElement).getAttribute('data-lang');
      if (lang === this.currentLanguage) {
        (el as HTMLElement).style.display = '';
      } else {
        (el as HTMLElement).style.display = 'none';
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  downloadFile(): void {
    const link = document.createElement('a');
    link.href = 'assets/Yago_CV.pdf';
    link.download = 'Yago_Catalano_Andújar_CV.pdf';
    link.click();
  }
}
