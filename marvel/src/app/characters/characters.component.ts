import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../services/marvel-api.service";
import { Brewery } from '../brewery.model';
import { BreweryService } from '../brewery.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  
  title = 'marvelApp';
  public characters: Array<any> = [];
  throttle = 0;
  distance = 2;
  page = 1;
  breweries: Brewery[] | any[] = [];

  constructor(private character: MarvelApiService, private breweryService: BreweryService ) { }

  ngOnInit(): void {
    this.character.getCharacters().subscribe((res) => {
      this.characters = res.data.results;
    });
    this.breweryService
      .getBreweries(this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries = breweries;
      });
  }

  onScroll(): void {
    this.breweryService
      .getBreweries(++this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries.push(...breweries);
      });
  }
  }



