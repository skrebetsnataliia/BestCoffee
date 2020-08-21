import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent implements OnInit {

  constructor() { }
  @Input()information;
  @Input()imgName;
  ngOnInit(): void {
  }

}
