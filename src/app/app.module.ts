import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AdderComponent } from './adder/adder.component';
import { DolistComponent } from './dolist/dolist.component';
import { DonelistComponent } from './donelist/donelist.component';


@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    DolistComponent,
    DonelistComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
