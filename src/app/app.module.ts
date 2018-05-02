import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './Resources/icons.component';
import { MapsComponent } from './Projects/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatPaginatorModule,
    MatSelectModule, MatSnackBarModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CreateSupplierCostComponent } from './Forms/create-supplier-cost/create-supplier-cost.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectService} from './services/Projects/ProjectService';
import {ResourceService} from './services/Resources/ResourceService';
import {SupplierService} from './services/suppliers/SupplierService';
import {SupplierFinanceService} from './services/suppliers/SupplierFinanceService';
import {SupplierProjectModel} from './model/suppliers/SupplierProjectModel';
import {SupplierProjectService} from './services/suppliers/SupplierProjectService';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateSupplierCostComponent,

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule, HttpClientModule,
RouterModule,
    AppRoutingModule,
      MatFormFieldModule,
      MatSelectModule,
      MatOptionModule,
      MatCardModule,
      MatButtonModule, MatTabsModule, MatTableModule, MatInputModule, MatSelectModule, NoopAnimationsModule,
      MatPaginatorModule, MatDialogModule, MatSnackBarModule
  ],
  providers: [AppComponent,
      ProjectService,
      ResourceService,
      SupplierService,
      ProjectService,
      SupplierFinanceService,
      SupplierProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
