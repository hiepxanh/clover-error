import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  items=[
    {
      no:'1',
      img:'anh1.jpg',
      book:'News Mobile App UI KIT F.',
      author:'Cam Thuong',
      sold:'10',
      view:'320'
    },
    {
      no:'2',
      img:'anh2.jpg',
      book:'News Mobile App UI KIT F.',
      author:'Cam Thuong',
      sold:'10',
      view:'320'
    },
    {
      no:'3',
      img:'anh3.jpg',
      book:'News Mobile App UI KIT F.',
      author:'Cam Thuong',
      sold:'10',
      view:'320'
    },
    {
      no:'4',
      img:'anh4.jpg',
      book:'News Mobile App UI KIT F.',
      author:'Cam Thuong',
      sold:'10',
      view:'320'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
