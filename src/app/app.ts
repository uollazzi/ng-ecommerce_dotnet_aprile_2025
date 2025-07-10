import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategorieList } from "./components/categorie-list/categorie-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategorieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-ecommerce';
}
