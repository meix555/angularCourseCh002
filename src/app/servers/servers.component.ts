import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName:string = 'TestServer';
  serverCreated:boolean = false;
  servers: string[];
  showingDetails: boolean = false;
  toggleButtonClicks: number[] = [];
  toggleButtonClickNum: number = 0;

  constructor() {
    this.servers = ['Testserver', 'Testserver 2'];
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;

    this.addServer(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  addServer(server:string): void {
    this.servers.push(server);
  }

  onToggleDetails(): void {
    this.showingDetails = !this.showingDetails;
    this.toggleButtonClicks.push(++this.toggleButtonClickNum);
  }
}
