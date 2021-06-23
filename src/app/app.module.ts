import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';

/* console.log all actions and state changes */
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('previous state', state);
    console.log('action', action);
    let nextState = reducer(state, action);
    console.log('current state', nextState);
    return nextState;
  };
}
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }, { metaReducers })
  ],

  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
