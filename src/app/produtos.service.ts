import { Injectable, OnInit } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService implements OnInit {
  produtos: IProduto[] = produtos;

  constructor() {}

  ngOnInit(): void {}

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find((produto) => (produto.id = produtoId));
  }
}
