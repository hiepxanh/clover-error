import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-icon',
  templateUrl: './atom-icon.component.html',
  styleUrls: ['./atom-icon.component.scss']
})
export default class AtomIconComponent implements OnInit {
  @Input() name!:string;
  @Input() color1 = '';
  @Input() color2 = '';
  @Input() checkIcon = true;
  @Input() bg ='';


  constructor() { }

  ngOnInit(): void {
  }

}
