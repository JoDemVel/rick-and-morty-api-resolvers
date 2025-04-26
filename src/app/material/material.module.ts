import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatChipsModule,
  MatDividerModule,
  MatTabsModule,
  MatListModule,
  MatBadgeModule
];

@NgModule({
  exports: [...materialModules],
})
export class MaterialModule {}
