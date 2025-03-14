import { ChangeDetectionStrategy, Component, signal, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-information',
  imports: [],
  templateUrl: './pokemon-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonInformationComponent implements OnInit {

  private pokemonService = inject(PokemonsService)
  private route = inject(ActivatedRoute)
  private title = inject(Title)
  private meta = inject(Meta)

  public pokemon = signal<Pokemon | null>(null)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if( !id ) return;

   this.pokemonService.loadPokemon(id)
   .pipe(
    tap( ({ name, id }) => {
      const pagetitle = `#${id} - ${name}`;
      const pageDescription = `Pagina del Pokemon ${name}`;
      this.title.setTitle(pagetitle)

      this.meta.updateTag({
        name: 'Description',
        content: pageDescription
      });
      this.meta.updateTag({ name: 'on:title', content: pagetitle});
      this.meta.updateTag({
        name: 'og:description',
        content: pageDescription
      });
      this.meta.updateTag({
        name: 'og:image',
        content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`
      })
    })
   )
   .subscribe(this.pokemon.set)
  }


}
