import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageBase } from '../../../base-page';

@Component({
 selector: 'app-schema',
 templateUrl: './schema.page.html',
 styleUrls: ['./schema.page.scss'],
})
export class SchemaPage extends PageBase {
 constructor(private activatedRoute: ActivatedRoute) {
  super();
 }
 override ngOnInit(): void {
  console.log(this.activatedRoute);
 }
}
