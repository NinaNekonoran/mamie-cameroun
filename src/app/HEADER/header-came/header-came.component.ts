import {Component, HostListener, OnInit} from '@angular/core';
import {title} from '../../recipes';

@Component({
  selector: 'app-header-came',
  templateUrl: './header-came.component.html',
  styleUrls: ['./header-came.component.css']
})
export class HeaderCameComponent implements OnInit {

  constructor() { }

  title = title;
  mobile: boolean;

  ngOnInit(): void {
    this.isMoblie();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    this.isMoblie();
  }

  private isMoblie(): void {
    if (window.innerWidth < 600) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

}
