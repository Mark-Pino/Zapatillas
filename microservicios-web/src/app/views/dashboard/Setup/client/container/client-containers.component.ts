import {Component, OnInit} from '@angular/core';
import {Client} from "../models/client";
import {ClientsService} from "../../../../../providers/services/setup/clients.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-client-list [clients]="clients"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-client-list>
  `
})

export class ClientContainersComponent implements OnInit {
  public clients: Client[] = [];

  constructor(private clientsService: ClientsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getClients();
  }

  public getClients(): void {
    this.clientsService.getAll$().subscribe(response => {
      this.clients = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idClient: number) {
    this.router.navigate(['edit', {idClient: idClient}], {relativeTo: this.route});
  }

  public eventDelete(idClient: number): void {

    this.clientsService.delete$(idClient).subscribe(response => {
      if (response) {
        this.getClients()
      }
    });
  }
}
