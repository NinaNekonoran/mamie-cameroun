import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {title} from '../../recipes';

@Component({
  selector: 'app-header-came',
  templateUrl: './header-came.component.html',
  styleUrls: ['./header-came.component.css']
})
export class HeaderCameComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  title = title;g

  activeItem: MenuItem;

  ngOnInit() {
    
    this.items = [
      {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['']}
    ];

    this.activeItem = this.items[0];
  }

}
