import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ord',
  templateUrl: './ord.page.html',
  styleUrls: ['./ord.page.scss'],
})
export class OrdPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onChange($event) {
    console.log($event);
  }
}
