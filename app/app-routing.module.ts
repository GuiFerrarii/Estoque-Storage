import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    loadChildren: () => import('./listagem-produtos/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'compra-produtos',
    loadChildren: () => import('./compra/compra-produtos/compra-produtos.module').then( m => m.CompraProdutosPageModule)
  },
  {
    path: 'venda-produtos',
    loadChildren: () => import('./venda/venda-produtos/venda-produtos.module').then( m => m.VendaProdutosPageModule)
  },
  {
    path: 'historico-produtos',
    loadChildren: () => import('./historico/historico-produtos/historico-produtos.module').then( m => m.HistoricoProdutosPageModule)
  },

  {
    path: 'detalhes-produto/:id',
    loadChildren: () => import('./detalhes-produtos/detalhes-produto/detalhes-produto.module').then( m => m.DetalhesProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
