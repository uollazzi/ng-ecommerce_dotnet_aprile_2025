import { Injectable } from '@angular/core';
import { CategoriaDTO, CategoriaModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class Ecommerce {

  constructor() { }

  async getCategorie() {
    const res = await fetch("https://localhost:7257/api/categorie");
    return await res.json() as CategoriaModel[];
  }

  async addCategoria(model: CategoriaDTO) {
    const res = await fetch("https://localhost:7257/api/categorie", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model)
    });

    return await res.json() as CategoriaModel;
  }
}
