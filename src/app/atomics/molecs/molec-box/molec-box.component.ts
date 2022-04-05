import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-molec-box',
  templateUrl: './molec-box.component.html',
  styleUrls: ['./molec-box.component.scss']
})
export class MolecBoxComponent implements OnInit {
  @Input() box!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
