import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-icon',
  templateUrl: './atom-icon.component.html',
  styleUrls: ['./atom-icon.component.scss']
})
export default class AtomIconComponent implements OnInit {
  @Input() name!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
