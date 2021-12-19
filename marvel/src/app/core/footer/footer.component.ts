import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MarvelApiService } from "../../services/marvel-api.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  version: string;

  constructor(public contextService: MarvelApiService) { 
    this.version = environment.settings.version; 
  }

  ngOnInit(): void {
  }

}
