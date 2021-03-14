import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCameComponent } from './HEADER/header-came/header-came.component';

import {CommonModule} from '@angular/common';

import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipesCameComponent } from './MENU/recipes-came/recipes-came.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipeBase} from './RECETTE/BASE/recipe-base/recipe-base';
import { FooterCameComponent } from './FOOTER/footer-came/footer-came.component';
import { RecipeFicheCameComponent } from './MENU/recipe-fiche-came/recipe-fiche-came.component';
import { HighlightPipe } from './highlight.pipe';
import { RecipeLComponent } from './RECETTE/BASE/recipe-l/recipe-l.component';
import { RecipeMComponent } from './RECETTE/BASE/recipe-m/recipe-m.component';
import { RecipeSComponent } from './RECETTE/BASE/recipe-s/recipe-s.component';
import { RecipeDetailsIngredientComponent } from './RECETTE/ITEM/recipe-details-ingredient/recipe-details-ingredient.component';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import { RecipeDetailsMLComponent } from './RECETTE/ITEM/recipe-details-m-l/recipe-details-m-l.component';
import {RecipeDetailsSComponent} from './RECETTE/ITEM/recipe-details-s/recipe-details-s.component';
import { PluginLikeFacebookComponent } from './PLUGIN/plugin-like-facebook/plugin-like-facebook.component';
import { BadgeTypeComponent } from './ITEM_SHARED/badge-type/badge-type.component';
import { RecipeStepComponent } from './RECETTE/ITEM/recipe-step/recipe-step.component';
import { RecipeIngredientListComponent } from './RECETTE/ITEM/recipe-ingredient-list/recipe-ingredient-list.component';
import { DifficultesComponent } from './ITEM_SHARED/difficultes/difficultes.component';
import { CommentFacebookComponent } from './PLUGIN/comment-facebook/comment-facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCameComponent,
    RecipesCameComponent,
    RecipeBase,
    FooterCameComponent,
    RecipeFicheCameComponent,
    HighlightPipe,
    RecipeLComponent,
    RecipeMComponent,
    RecipeSComponent,
    RecipeDetailsIngredientComponent,
    RecipeDetailsMLComponent,
    RecipeDetailsSComponent,
    PluginLikeFacebookComponent,
    BadgeTypeComponent,
    RecipeStepComponent,
    RecipeIngredientListComponent,
    DifficultesComponent,
    CommentFacebookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TabMenuModule,
    CardModule,
    AppRoutingModule,
    DataViewModule,
    DividerModule,
    ButtonModule,
    FieldsetModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
