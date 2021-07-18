import {Component, HostListener, OnInit} from '@angular/core';
import { recipes } from '../../recipes';

@Component({
  selector: 'app-recipes-came',
  templateUrl: './recipes-came.component.html',
  styleUrls: ['./recipes-came.component.css']
})
export class RecipesCameComponent implements OnInit {

  constructor() { }
  mobile;

  ngOnInit(): void {
    this.isMoblie();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMoblie();
  }

  private isMoblie() {
    if (window.innerWidth < 600) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  recipes = recipes;
}
