import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-molec-list',
  templateUrl: './molec-list.component.html',
  styleUrls: ['./molec-list.component.scss']
})
export class MolecListComponent implements OnInit {
  @Input() item!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
