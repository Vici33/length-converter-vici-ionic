import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  km: any;
  hm!: number;
  dam!: number;
  m!: number;
  dm!: number;
  cm!: number;
  mm!: number;

  constructor() {}

  convertUnit() {
    this.hm = this.km*10;
    this.dam = this.hm*10;
    this.m = this.dam*10;
    this.dm = this.m*10;
    this.cm = this.dm*10;
    this.mm = this.cm*10;
  }
}
