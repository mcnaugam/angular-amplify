import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [ClientsComponent, EmployeesComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NzLayoutModule, NzTableModule],
  exports: [HomeComponent],
})
export class HomeModule {}
