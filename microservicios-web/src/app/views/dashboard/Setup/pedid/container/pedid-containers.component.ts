import {Component, OnInit} from '@angular/core';
import {Pedid} from "../models/pedid";
import {PedidsService} from "../../../../../providers/services/setup/pedids.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-pedid-list [pedids]="pedids"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-pedid-list>
  `
})

export class PedidContainersComponent implements OnInit {
  public pedids: Pedid[] = [];

  constructor(private pedidsService: PedidsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getPedids();
  }

  public getPedids(): void {
    this.pedidsService.getAll$().subscribe(response => {
      this.pedids = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idPedid: number) {
    this.router.navigate(['edit', {idPedid: idPedid}], {relativeTo: this.route});
  }

  public eventDelete(idPedid: number): void {

    this.pedidsService.delete$(idPedid).subscribe(response => {
      if (response) {
        this.getPedids()
      }
    });
  }
}
