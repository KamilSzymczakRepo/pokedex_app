import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../app/services/worker'
import { ICard } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @Input()
  pokemon = []

  @Input()
  key = 'false';

  selected: any;
  buttonSelectType = "card";

  isLoggin: boolean = false;
  showSpinner: boolean = false;
  title: string = 'pokedex';

  loginApi(event: any) {
    this.key = event
  
    this.worker.getSpinnerBehavior().next(true)
    this.worker.getLoginBehavior().next(true)
  }

  changeSelectionGroup(select: any) {
    this.buttonSelectType = select
  }

  constructor(private worker: Worker) { }

  ngOnInit(): void {
    this.worker.getSpinnerBehavior()
      .subscribe({
        next: (show: boolean) => {
          this.showSpinner = show
        }
      });
    this.worker.getLoginBehavior()
      .subscribe({
        next: (login: boolean) => {
          this.isLoggin = login
        }
      });

  }

}
