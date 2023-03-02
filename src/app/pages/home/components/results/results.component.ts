import { SearchService } from './../../../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: any[] = [];
  count = 0;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getPassedResults().subscribe(
      (res: any) => {
        this.results = res.results;
        this.count = res.count;
        console.log('Resuts and Count', this.results, this.count);
      },
      (err: any) => {
        console.log('Error Occuured', err);
      }
    );
  }
}
