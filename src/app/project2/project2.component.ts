import { Component, OnInit } from '@angular/core';
import {DepnService} from './project2.service';

@Component({
  selector: 'app-project2',
  template: `<h2>hi</h2>
  <ul>
  <li *ngFor="let cr of courses">
  {{courses}}
  </li>
  </ul>
  `
})
export class Project2Component{
courses;
  constructor() { 
  let service=new depnService();
  this.course=sevice.getService();
  }

  ngOnInit() {
  }

}
