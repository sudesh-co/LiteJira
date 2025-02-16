import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../../../shared/services/common.service';
import { CustomizerSettingsService } from '../../../../shared/customizer-settings/customizer-settings.service';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { ComponyService } from '../../compony.service';

@Component({
  selector: 'app-company-add-edit',
  standalone:false,
  templateUrl: './company-add-edit.component.html',
  styleUrls: ['./company-add-edit.component.scss']
})
export class CompanyAddEditComponent implements OnInit, OnDestroy {
  
  public companyDetailsGroup!: FormGroup;
  public countryList: any[] = [];
  public stateList: any[] = [];
  public cityList: any[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public themeService: CustomizerSettingsService,
    private fb: FormBuilder,
    private commonService: CommonService,
    private companyService: ComponyService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeForm();
      this.loadCountries();
      this.setupValueChangeListeners();
    }
  }

  private initializeForm(): void {
    this.companyDetailsGroup = this.fb.group({
      company_name: [''],
      company_address: [''],
      company_email: [''],
      company_phone: [''],
      company_type: [''],
      website: [''],
      pan: [''],
      address: [''],
      company_logo: [''],
      date_of_establishment: [''],
      company_description: [''],
      country: [''],
      state: [''],
      city: [''],
      zipcode: [''],
      date: [''],
    });
  }

  private loadCountries(): void {
    this.commonService.GetLocationData({ ParentID: null }).subscribe((res: any) => {
      this.countryList = res.data;
    });
  }

  private setupValueChangeListeners(): void {
    this.companyDetailsGroup.get('country')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(Boolean),
      switchMap(countryId => this.commonService.GetLocationData({ ParentID: countryId }))
    ).subscribe(res => this.stateList = res.data);

    this.companyDetailsGroup.get('state')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(Boolean),
      switchMap(stateId => this.commonService.GetLocationData({ ParentID: stateId }))
    ).subscribe(res => this.cityList = res.data);
  }
  saveCompanyDetails():void{
    const companyDetails = this.companyDetailsGroup.value;

const formattedCompanyDetails = {
  company_name: companyDetails.company_name,
  zipcode: companyDetails.zipcode,
  countryid: companyDetails.country,
  stateid: companyDetails.state,
  cityid: companyDetails.city,
  email: companyDetails.company_email,
  contactno: companyDetails.company_phone,
  pan: companyDetails.pan,
  website: companyDetails.website
};


    this.companyDetailsGroup.markAllAsTouched();
    if (formattedCompanyDetails) {
      this.companyService.SaveCompanyDetails(formattedCompanyDetails).subscribe((res: any) => {
        if (res.data) {
      }
    })
  }
}

  ngOnDestroy(): void {
  }
}
