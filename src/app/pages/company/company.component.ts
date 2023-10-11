import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company, User } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{

  active = 1
  company?: Company
  users?: User[]
  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    const idCompany = Number(this.route.snapshot.paramMap.get('id'))

    this.companyService.getCompanyById(idCompany).subscribe( company => {
      this.company = company
      
      this.users = company?.users
      
      if(this.company === null || this.company == undefined){
        this.router.navigate(['/companies'])
      }
    })
    
  }

}
