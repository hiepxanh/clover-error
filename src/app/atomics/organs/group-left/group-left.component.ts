import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-left',
  templateUrl: './group-left.component.html',
  styleUrls: ['./group-left.component.scss']
})
export class GroupLeftComponent implements OnInit {
  @Input() icons = ['fa-plus-square-o', 'fa-shopping-cart', 'fa-file-text', 'fa-cog']

  constructor() { }

  ngOnInit(): void {
  }

}
