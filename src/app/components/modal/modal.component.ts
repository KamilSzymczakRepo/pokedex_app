import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()
  inputValue = ''

  @Output()
  login = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(target: any) {
    this.inputValue = target.value;
  }

  onClickLogin() {
    this.login.emit(this.inputValue)

  }

}
