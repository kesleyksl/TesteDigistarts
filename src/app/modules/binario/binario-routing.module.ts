import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinarioComponent } from './pages/binario/binario.component';


const routes: Routes = [
  {
    path: '',
    component: BinarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinarioRoutingModule { }
