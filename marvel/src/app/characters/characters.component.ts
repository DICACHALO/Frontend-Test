import { Component } from '@angular/core';
import { MarvelApiService } from "../services/marvel-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  
  title = 'marvelApp';
  public characters: Array<any> = [];

  constructor(private character: MarvelApiService) { }

  ngOnInit(): void {
    this.character.getCharacters().subscribe((res) => {
      this.characters = res.data.results;
    });
  }
  }


