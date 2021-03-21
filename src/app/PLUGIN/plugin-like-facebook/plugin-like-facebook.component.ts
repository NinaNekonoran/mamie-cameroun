import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plugin-like-facebook',
  templateUrl: './plugin-like-facebook.component.html'
})
export class PluginLikeFacebookComponent implements OnInit, AfterViewInit {
  @Input()
  recipe;

  url;

  ngOnInit(): void {
    this.url = 'https://mamie-cameroun.fr/recipe/' + this.recipe.id + '/' + this.recipe.title.replaceAll(' ', '%20');
    console.log('url : ' + this.url);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit(){
    // tslint:disable-next-line:only-arrow-functions typedef
    (function( d, s, id) {
      // tslint:disable-next-line:prefer-const one-variable-per-declaration
      let js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0&appId=191725056082943&autoLogAppEvents=1';

      if (d.getElementById(id)){
        // if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }
}
