import {Component, OnInit} from '@angular/core';
import {Categori} from "../models/categori";
import {CategorisService} from "../../../../../providers/services/setup/categoris.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-categori-list [categoris]="categoris"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-categori-list>
  `
})

export class CategoriContainersComponent implements OnInit {
  public categoris: Categori[] = [];

  constructor(private categorisService: CategorisService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getCategoris();
  }

  public getCategoris(): void {
    this.categorisService.getAll$().subscribe(response => {
      this.categoris = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idCategori: number) {
    this.router.navigate(['edit', {idCategori: idCategori}], {relativeTo: this.route});
  }

  public eventDelete(idCategori: number): void {

    this.categorisService.delete$(idCategori).subscribe(response => {
      if (response) {
        this.getCategoris()
      }
    });
  }
}
