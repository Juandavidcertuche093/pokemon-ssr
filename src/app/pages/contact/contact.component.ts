import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactComponent implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)


  ngOnInit(): void {
    this.title.setTitle('Contac Page');
    this.meta.updateTag({
      name: 'Descripcion',
      content: 'Este es mi Contac Page'
    });
    this.meta.updateTag({name: 'og:title', content: 'Contac Page'})
    this.meta.updateTag({
      name: 'Keyworks',
      content: 'hola,Mundo,Fernado,Herrera,Curso,Angular,PRO'
    })
  }

}

