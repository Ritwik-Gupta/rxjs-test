import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableFromScratchComponent } from './components/observable-from-scratch/observable-from-scratch.component';
import { IntervalObsComponent } from './components/interval-obs/interval-obs.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { BufferOperatorComponent } from './components/rxjs-operators/buffer-operator/buffer-operator.component';
import { BufferCountComponent } from './components/rxjs-operators/buffer-count/buffer-count.component';

const routes: Routes = [
  {path: 'observable-from-scratch', component: ObservableFromScratchComponent},
  {path: 'interval-observable-test', component: IntervalObsComponent },
  {
    path: 'rxjs-operators-test',
    component: RxjsOperatorsComponent,
    children: [
      {path:'buffer-operator-test', component: BufferOperatorComponent},
      {path:'buffer-count-test', component: BufferCountComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
