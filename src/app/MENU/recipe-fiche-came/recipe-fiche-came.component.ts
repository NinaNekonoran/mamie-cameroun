import {Component, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {difficultImage} from '../../recipes';
@Component({
  selector: 'app-recipe-fiche-came',
  templateUrl: './recipe-fiche-came.component.html',
  styleUrls: ['./recipe-fiche-came.component.css']
})
export class RecipeFicheCameComponent implements OnInit {

  @Input()
  recipe;
  @Input()
  full: boolean;
  @Output()
  hideSpiner = new EventEmitter<any>();

  difficultImage = difficultImage;

  ngOnInit(): void {
  }

  hideLoader(){
    this.hideSpiner.emit(null);
  }
}
