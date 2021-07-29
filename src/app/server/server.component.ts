import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  private id:number;
  private status:string;

  constructor() {
    this.id = 11;
    this.status = Math.random() < 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {

  }

  getId(): number {
    return this.id;
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'offline' ? 'red' : 'aqua';
  }

  getCssClass(): string {
    return this.status === 'offline' ? 'boldText' : 'normalText';
  }

}
