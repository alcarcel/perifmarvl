import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { TablaService } from './services/tabla.service'

import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TablaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
