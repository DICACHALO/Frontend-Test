import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../services/marvel-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  
  title = 'marvelApp';
  characters: Array<any> = [];
  throttle = 0;
  distance = 2;
  page = 1;
 

  constructor(private characterService: MarvelApiService ) { }

  ngOnInit(): void {
    this.characterService
    .getCharacters()
    .subscribe((res) => {
      this.characters = res.data.results;
    });
  }

  onScroll(): void {
    this.characterService
      .getCharacters()
      .subscribe((characters: [Array<any>]) => {
        this.characters.push();
      });
  }
  }



