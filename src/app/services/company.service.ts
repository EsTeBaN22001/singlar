import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap	 } from 'rxjs';
import { Company } from '../models/company';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get<{companies: Company[]}>('assets/utils/companies.json').pipe(
      map(companies => companies.companies)
    );
  }

  getCompanyById(id: number): Observable<Company | undefined>{
    return this.http.get<{companies: Company[]}>('assets/utils/companies.json').pipe(
      map( companies => companies.companies.find( company => company.id === id) )
    )
  }
}
