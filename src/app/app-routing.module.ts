import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';

import { ConectaComponent } from './conecta/conecta.component';

const routes: Routes = [
  {path: 'test', component:TestComponent},
  {path: 'itemdropdown', component:ItemDropdownComponent},
  {path: 'conecta', component:ConectaComponent},
  //não precisa path para o início},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
