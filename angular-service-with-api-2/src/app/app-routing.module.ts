import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpViewComponent } from './component/emp-view/emp-view.component';

const routes: Routes = [
  {path:'emp-view',component:EmpViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
