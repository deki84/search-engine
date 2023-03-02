import { SearchService } from './../../../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchWeb(): void {
    if (this.searchTerm === '') return;
    this.searchService.getResults(this.searchTerm).subscribe(
      (res: any) => {
        this.searchService.passResults({
          results: res.value,
          count: res.totalCount,
        });
      },
      (err: any) => {
        console.log('Error Occured', err);
      }
    );
  }
}
