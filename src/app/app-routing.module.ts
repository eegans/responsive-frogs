import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FlexComponent } from './flex/flex.component';
import { FrogsComponent } from './frogs/frogs.component';
import { ImagesComponent } from './images/images.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: '', component: FrogsComponent },
  { path: 'frogs', component: FrogsComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '**', component: FrogsComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }