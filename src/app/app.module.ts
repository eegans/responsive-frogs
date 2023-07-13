import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

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
    MatSelectModule
  ],
  providers: [FrogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
