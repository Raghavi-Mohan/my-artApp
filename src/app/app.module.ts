import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogcomponentComponent } from './catalogcomponent/catalogcomponent.component';
import { PaintingcomponentComponent } from './paintingcomponent/paintingcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogcomponentComponent,
    PaintingcomponentComponent,
    HomecomponentComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
