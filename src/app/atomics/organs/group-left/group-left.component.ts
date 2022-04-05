import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-left',
  templateUrl: './group-left.component.html',
  styleUrls: ['./group-left.component.scss']
})
export class GroupLeftComponent implements OnInit {
  icons = [
    'fa-shopping-cart','fa-file-text', 'fa-cog'
  ]
  icons2 = [
   'fa-circle','fa-sign-out'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
