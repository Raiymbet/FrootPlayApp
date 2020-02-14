import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule { }
