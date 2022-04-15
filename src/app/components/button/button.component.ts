import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../services/worker';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  select = "card"
  constructor(private worker: Worker) { }

  ngOnInit(): void {

  }

  @Output()
  selectGroupButton = new EventEmitter()

  onClickButton(value: any) {
    this.select = value;
    this.selectGroupButton.emit(this.select);
    this.worker.clearFilter();

  }

}
