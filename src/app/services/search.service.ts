import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiKey = environment.rapidAPIKey;
  searchResult = new Subject();
  constructor(private http: HttpClient) {}

  getResults(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`,
      {
        headers: {
          'x-rapidapi-key': this.apiKey,
        },
      }
    );
  }

  passResults(results: any): void {
    this.searchResult.next(results);
  }

  getPassedResults(): Observable<any> {
    return this.searchResult.asObservable();
  }
}
