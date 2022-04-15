import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../../services/worker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input()
  clearSearchValue = "";

  value = ""
  constructor(private worker: Worker) { }
  ngOnInit(): void {
    this.worker.getButtonBehavior()
      .subscribe({
        next: (value: any) => {
          this.value = value
        }
      })
  }

  

  changeInput(target: any) {
    this.value = target.value;
    this.worker.filterByName(target.value)
  }

}
