import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Worker } from '../../services/worker'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnChanges {
  cards: any;
  errorMessage: string;
  showSpinner: boolean = false;

  @Input()
  selected: any;

  @Input()
  key = ''

  constructor(private http: HttpService, private worker: Worker) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key'].currentValue !== "false") {
      this.http.setApiKey(changes['key'].currentValue)
      this.http.getCard()
        .subscribe({
          next: (response: any) => {
            this.worker.getSpinnerBehavior().next(false);
            this.worker.getCardsBehavior().next(response.data);
            this.worker.getListsBehavior().next(response.data);
          },
          error: (error: any) => {
            this.errorMessage = 'Error message: ' + error.message + "; Error code: " + error.code
          }
        });
    }
  }

  ngOnInit(): void {
    this.worker.getCardsBehavior()
      .subscribe({
        next: (cards: any) => {
          this.worker.setCards(cards)
          this.cards = this.worker.getCards()
        }
      })
  }

}
