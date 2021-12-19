import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private env: string;
  constructor(public http: HttpClient) {
    this.env = environment.APP_URL;
  }

  public getCharacters() {
    return this.http.get(this.env).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}

