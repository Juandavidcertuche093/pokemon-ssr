import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInformationComponent } from './pokemon-information.component';

describe('PokemonInformationComponent', () => {
  let component: PokemonInformationComponent;
  let fixture: ComponentFixture<PokemonInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
