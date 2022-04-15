import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  @Input()
  pokemon: any;
  constructor() { }

  ngOnInit(): void {
  }

}
