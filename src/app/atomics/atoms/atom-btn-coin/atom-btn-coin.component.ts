import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-btn-coin',
  templateUrl: './atom-btn-coin.component.html',
  styleUrls: ['./atom-btn-coin.component.scss']
})
export class AtomBtnCoinComponent implements OnInit {
  @Input()word!: string
  constructor() { }

  ngOnInit(): void {
  }

}
