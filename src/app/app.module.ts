import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PictureBoxComponent } from './picture-box/picture-box.component';
import { HttpClientModule } from '@angular/common/http';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PictureBoxComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
