import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass02',
  templateUrl: './ass02.component.html',
  styleUrls: ['./ass02.component.css']
})
export class Ass02Component implements OnInit {

  username:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickedCLearButton(): void {
    this.username = '';
  }

}
