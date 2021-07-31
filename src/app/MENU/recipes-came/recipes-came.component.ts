import {Component, HostListener, OnInit} from '@angular/core';
import { recipes } from '../../recipes';

@Component({
  selector: 'app-recipes-came',
  templateUrl: './recipes-came.component.html',
  styleUrls: ['./recipes-came.component.css']
})
export class RecipesCameComponent implements OnInit {

  constructor() {}

  mobile;
  recipes = recipes;
  load: number = recipes.length;

  ngOnInit(): void {
    this.isMoblie();
  }

  hideSpiner(event: any){
    this.load = this.load - 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMoblie();
  }

  private isMoblie() {
    if (window.innerWidth < 600) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }
}
