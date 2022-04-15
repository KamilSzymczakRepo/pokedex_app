import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  pokemon: any;

  Object = Object;

  constructor() { }

  ngOnInit(): void {
  }


  isString(value: any) {
    if (typeof (value) === "string") {
      return true;
    } return false;
  }
}
