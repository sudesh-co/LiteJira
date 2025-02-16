import { Component, OnInit, Inject, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ComponyService } from '../compony.service';
import { isPlatformServer } from '@angular/common';

const COMPANY_DETAILS_KEY = makeStateKey<any>('companyDetails');

@Component({
  selector: 'app-company-details',
  standalone: false,
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent implements OnInit {
  public companyDetails: any;

  constructor(
    private companyService: ComponyService,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  private getCompanyDetails() {
    // Check if data already exists in TransferState (pre-fetched on SSR)
    if (this.state.hasKey(COMPANY_DETAILS_KEY)) {
      this.companyDetails = this.state.get(COMPANY_DETAILS_KEY, null);
    } else {
      this.companyService.getCompanyDetails({ companyID: 1 }).subscribe(res => {
        this.companyDetails = res.data[0];
        console.log(this.companyDetails);

        // Store data in TransferState (only if running on the server)
        if (isPlatformServer(this.platformId)) {
          this.state.set(COMPANY_DETAILS_KEY, this.companyDetails);
        }
      });
    }
  }
}
