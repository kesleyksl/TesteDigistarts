import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [


      {
        path: '',
        redirectTo: '/Binario',
        pathMatch: 'full'
      },
      {
        path: 'Binario',
        loadChildren: () => import('./modules/binario/binario.module').then(m => m.BinarioModule)
      }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
