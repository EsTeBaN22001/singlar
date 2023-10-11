import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LayoutComponent,
    CompaniesComponent,
    CompanyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
