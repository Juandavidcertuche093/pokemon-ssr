import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html'
})
export default class AboutComponent implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)


  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'Descripcion',
      content: 'Este es mi About Page'
    });
    this.meta.updateTag({name: 'og:title', content: 'About Page'})
    this.meta.updateTag({
      name: 'Keyworks',
      content: 'hola,Mundo,Fernado,Herrera,Curso,Angular,PRO'
    })
  }
}
