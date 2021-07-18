import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  redirection: string = null;
  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Découvrez nos quelques recettes simples, familiales, classiques, et traditionnelles. Nous vous souhaitons un bon appétit.'},
      {name: 'author', content: 'Mamie Cameroun et les jumeaux'},
      {name: 'keywords', content: 'Angular, Cuisine, Recette, Cameroun, Afrique'}
    ]);
    this.titleService.setTitle('Mamie Cameroun');
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.redirection = params.redirection;
      if (this.redirection) {
        this.router.navigate([
            'recipe/' + this.redirection + '/'
        ]);
      }
    });
  }
}
