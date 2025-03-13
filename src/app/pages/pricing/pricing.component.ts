import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingComponent implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)
  private platform = inject(PLATFORM_ID)


  ngOnInit(): void {

    // console.log(isPlatformServer(this.platform))

    this.title.setTitle('Pricing Page');
    this.meta.updateTag({
      name: 'Descripcion',
      content: 'Este es mi Pricing Page'
    });
    this.meta.updateTag({name: 'og:title', content: 'Pricing Page'})
    this.meta.updateTag({
      name: 'Keyworks',
      content: 'hola,Mundo,Fernado,Herrera,Curso,Angular,PRO'
    })

  }
}
