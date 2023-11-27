import {Component, OnInit} from '@angular/core';
import {Usuari} from "../models/usuari";
import {UsuarisService} from "../../../../../providers/services/setup/usuaris.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-usuari-list [usuaris]="usuaris"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-usuari-list>
  `
})

export class UsuariContainersComponent implements OnInit {
  public usuaris: Usuari[] = [];

  constructor(private usuarisService: UsuarisService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getUsuaris();
  }

  public getUsuaris(): void {
    this.usuarisService.getAll$().subscribe(response => {
      this.usuaris = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idUsuari: number) {
    this.router.navigate(['edit', {idUsuari: idUsuari}], {relativeTo: this.route});
  }

  public eventDelete(idUsuari: number): void {

    this.usuarisService.delete$(idUsuari).subscribe(response => {
      if (response) {
        this.getUsuaris()
      }
    });
  }
}
