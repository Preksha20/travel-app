import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-famousplaces',
  templateUrl: './famousplaces.component.html',
  styleUrls: ['./famousplaces.component.scss']
})
export class FamousplacesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
