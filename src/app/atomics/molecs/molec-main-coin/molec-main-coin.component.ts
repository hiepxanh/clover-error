import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-molec-main-coin',
  templateUrl: './molec-main-coin.component.html',
  styleUrls: ['./molec-main-coin.component.scss']
})
export class MolecMainCoinComponent implements OnInit {
items =[
  {
  userName:'Username: hiepxanh',
  code:'Mã nạp tiền: 7c2gtf',
  money:'Số tiền: đ10,000 (Bank)',
  time:'Thời gian: 01/03/2022 15:09'
  }
]
menu=[
  {
    menu:'Chưa Giải Quyết',
  },
  {
    menu:'Có Vấn Đề',
  },
  {
    menu:'Lưu Trữ',

  },
  {
    menu:'Đã Nạp',
  }
]
icons=[
  {
    name:'Nhả Coi'
  },
  {
    name:'Lưu Trữ'
  },
  {
    name:'Thừa Tiền'
  },
  {
    name:'Thiếu Tiền'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
