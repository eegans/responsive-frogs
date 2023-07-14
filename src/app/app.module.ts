import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgOptimizedImage } from '@angular/common'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrogService } from './service/frog.service';
import { FlexComponent } from './flex/flex.component';
import { FrogsComponent } from './frogs/frogs.component';
import { ImagesComponent } from './images/images.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [			
    AppComponent,
    FlexComponent,
      FrogsComponent,
      ImagesComponent,
      TypographyComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    NgOptimizedImage
  ],
  providers: [FrogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
