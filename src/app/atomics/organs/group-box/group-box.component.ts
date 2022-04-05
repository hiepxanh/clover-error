import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss']
})
export class GroupBoxComponent implements OnInit {
  boxs= [
    {
      icon1:'fa-eye',
      icon2:'fa-line-chart',
      total:'total Views',
      number:'308.402',
      title:'Start from 1 Jan 2021',
      color1: 'icon-color-green',
      color2: 'icon-color-red'
    },
    {
      icon1:'fa-shopping-bag',
      icon2:'fa-line-chart',
      total:'total Book',
      number:'10.820',
      title:'Add new Project',
      color1: 'icon-color-green',
      color2: 'icon-color-red'
    },
    {
      icon1:'fa-user',
      icon2:'fa-line-chart',
      total:'total Users',
      number:'8425',
      title:'New user noted every week',
      color1:'icon-color-blue',
      color2: 'icon-color-green'
    },
    {
      icon1:'fa-shopping-cart',
      icon2:'fa-line-chart',
      total:'total Sells',
      number:'1.028.623',
      title:'Start from 1 Jan 2021',
      color1:'icon-color-lightGreen',
      color2:'icon-color-green'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
