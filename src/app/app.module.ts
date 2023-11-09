import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableFromScratchComponent } from './components/observable-from-scratch/observable-from-scratch.component';
import { IntervalObsComponent } from './components/interval-obs/interval-obs.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { BufferOperatorComponent } from './components/rxjs-operators/buffer-operator/buffer-operator.component';
import { BufferCountComponent } from './components/rxjs-operators/buffer-count/buffer-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableFromScratchComponent,
    IntervalObsComponent,
    RxjsOperatorsComponent,
    BufferOperatorComponent,
    BufferCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
