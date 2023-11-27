import {Component, OnInit} from '@angular/core';
import {Pag} from "../models/pag";
import {PagsService} from "../../../../../providers/services/setup/pags.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-pag-list [pags]="pags"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-pag-list>
  `
})

export class PagContainersComponent implements OnInit {
  public pags: Pag[] = [];

  constructor(private pagsService: PagsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getPags();
  }

  public getPags(): void {
    this.pagsService.getAll$().subscribe(response => {
      this.pags = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idPag: number) {
    this.router.navigate(['edit', {idPag: idPag}], {relativeTo: this.route});
  }

  public eventDelete(idPag: number): void {

    this.pagsService.delete$(idPag).subscribe(response => {
      if (response) {
        this.getPags()
      }
    });
  }
}
