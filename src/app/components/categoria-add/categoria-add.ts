import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaDTO } from '../../models/categoria';
import { Ecommerce } from '../../services/ecommerce';

@Component({
  selector: 'app-categoria-add',
  imports: [FormsModule],
  templateUrl: './categoria-add.html',
  styleUrl: './categoria-add.css'
})
export class CategoriaAdd {
  model: CategoriaDTO = { nome: "" };

  constructor(private ecService: Ecommerce) {

  }

  salva() {
    this.ecService.addCategoria(this.model)
      .then(r => this.model = { nome: "" });
  }
}
