import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Worker } from '../../services/worker'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cards: any = [];

  @Input()
  key = ""
  constructor(private worker: Worker) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key'].currentValue !== "false") {
      this.cards = this.worker.getCards()
    }
  }


  ngOnInit(): void {
    this.worker.getListsBehavior()
      .subscribe({
        next: (cards: any) => {
          this.cards = this.worker.getCards()
        }
      })
  }

  @Output() selectionChange = new EventEmitter()

  selectCard(card: any) {
    this.selectionChange.emit(card)

  }
}

