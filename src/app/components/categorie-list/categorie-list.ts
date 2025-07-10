import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../models/categoria';
import { Ecommerce } from '../../services/ecommerce';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categorie-list',
  imports: [CommonModule],
  templateUrl: './categorie-list.html',
  styleUrl: './categorie-list.css'
})
export class CategorieList implements OnInit {
  categorie: CategoriaModel[] = [];

  constructor(private ecService: Ecommerce) {

  }

  ngOnInit(): void {
    this.ecService.getCategorie()
      .then(dati => this.categorie = dati);
  }
}
