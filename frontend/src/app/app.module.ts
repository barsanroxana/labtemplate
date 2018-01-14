// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent , BuyComponent, ContactComponent, GalleryComponent, ImageDetailComponent} from './components';

//Routes
import {RouterModule, Routes} from'@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ImageService } from './components/image/shared/image.service';
import {ImageFilterPipe} from './components/image/shared/filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    BuyComponent,
    GalleryComponent,
    ImageDetailComponent, 
    ImageFilterPipe

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    RouterModule.forRoot([
      {path:'home' , component:HomeComponent},
      {path:'buy', component:BuyComponent},
      {path:'contact', component:ContactComponent},
      {path: 'image/:id', component : ImageDetailComponent},
    ])
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    ImageService,
    ImageFilterPipe
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
