import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component, ElementRef, Inject, Injectable, KeyValueDiffers, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { lib_brgy, lib_city, lib_province, lib_region } from 'app/shared/model/library.model';
import { PersonEducation, PersonEligibility, PersonFamily, PersonPDSDetail, PersonTrainings, PersonWorkExperience } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { LibraryService } from 'app/shared/service/library.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { findIndex } from 'rxjs/operators';
@Component({
  selector: 'ngx-pds-entry',
  templateUrl: './pds-entry.component.html',
  styleUrls: ['./pds-entry.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class PdsEntryComponent implements OnInit {
  selectedItem = '';
  deleteConfirm: boolean;
  differ: any;
  public PDSForm: FormGroup;
  public curRecordId: string = null;
  public selectedTrainingRecord: number;
  public selectedFamilyRecord: number;
  public selectedWorkExpRecord:number;
  public selectedEducationRecord:number;
  public selectedEligibilityRecord:number;
  public currUserId:string;
  public lib_regions: lib_region[];
  public lib_provinces_filtered: lib_province[];
  public lib_cities_filtered: lib_city[];
  public lib_barangays_filtered: lib_brgy[];
  public showLoadingProgressBar$: Observable<boolean>;
  @ViewChild('familyExportTable') _familyExportTble: ElementRef;
  public baseUrl = environment.apiUrl+"Person/";
  personPDSDetail: PersonPDSDetail = {
    personFamily:[],
    personTrainings:[],
    personEducations:[],
    personEligibilities:[],
    personWorkExperiences:[],
  }

  constructor(
    private gd: GlobalVariablesService,
    private fb: FormBuilder,
    private frmglobaldataserve: FormGlobalDataService,
    private dialogserve: DialogService,
    private route: ActivatedRoute,
    private router: Router,
    private libraryserve: LibraryService) {
     }

  ngOnInit(): void {
    // if(this.gd.user_level.userLevelId == 3){
    //   this.currUserId = localStorage.getItem('secI')
    // }else{
    //   this.currUserId = "00000000-0000-0000-0000-000000000000"
    // }
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData()
  {
    this.lib_regions = JSON.parse(sessionStorage.getItem('lib_region'));
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getPDS();
    }else{
      this.buildPersonPDSDetail();
    }
  }
  
  onAddressChange(target:string,newValue) {
    if(target == "region"){
      this.getProvinceByRegion(newValue);
    }else if(target == "province"){
      this.getCityByProvince(newValue);
    }else if(target == "city"){
      this.getBrgyByCity(newValue);
    }
  }

  getProvinceByRegion(region:string){
    ;
    this.frmglobaldataserve.getRecord("Library/GetProvinceByRegion?region_code="+region)
      .subscribe((data: lib_province[]) => {
        this.lib_provinces_filtered = data;
      });
  }

  getCityByProvince(province: string){
    this.frmglobaldataserve.getRecord("Library/GetCityByProvince?prov_code="+province)
      .subscribe((data: lib_city[]) =>{
        this.lib_cities_filtered = data;
      });
  }

  getBrgyByCity(city: string){
    this.frmglobaldataserve.getRecord("Library/GetBrgyByCity?city_code="+city)
      .subscribe((data: lib_brgy[]) => {
        this.lib_barangays_filtered = data;
      });
  }

  getPDS(){
    debugger;
    this.frmglobaldataserve.getRecord("Person/GetPDS/"+this.curRecordId)
      .subscribe((data:PersonPDSDetail) => {
        this.personPDSDetail = data;
          this.buildPersonPDSDetail(this.personPDSDetail);
      },(err) => {          
        this.buildPersonPDSDetail();
      });
  }

  buildPersonPDSDetail(personPDSDetail?: PersonPDSDetail){
    this.PDSForm = this.fb.group({
      personId:[personPDSDetail?personPDSDetail.personId: Guid.raw],
      userId:[personPDSDetail?personPDSDetail.userId: this.curRecordId],
      firstName:[personPDSDetail?personPDSDetail.firstName:''],
      middleName:[personPDSDetail?personPDSDetail.middleName:''],
      lastName:[personPDSDetail?personPDSDetail.lastName:''],
      extName:[personPDSDetail?personPDSDetail.extName:''],
      sex:[personPDSDetail?personPDSDetail.sex:''],
      birthDate:[personPDSDetail?personPDSDetail.birthDate:''],
      placeOfBirth:[personPDSDetail?personPDSDetail.placeOfBirth:''],
      maritalStatus:[personPDSDetail?personPDSDetail.maritalStatus:''],
      citizenship:[personPDSDetail?personPDSDetail.citizenship:''],
      bloodType:[personPDSDetail?personPDSDetail.bloodType:''],
      height:[personPDSDetail?personPDSDetail.height:''],
      weight:[personPDSDetail?personPDSDetail.weight:''],
      gsis:[personPDSDetail?personPDSDetail.gsis:''],
      philHealth:[personPDSDetail?personPDSDetail.philHealth:''],
      sss:[personPDSDetail?personPDSDetail.sss:''],
      pagIbig:[personPDSDetail?personPDSDetail.pagIbig:''],
      tin:[personPDSDetail?personPDSDetail.tin:''],
      region_code:[personPDSDetail?personPDSDetail.region_code:''],
      prov_code:[personPDSDetail?personPDSDetail.prov_code:''],
      city_code:[personPDSDetail?personPDSDetail.city_code:''],
      brgy_code:[personPDSDetail?personPDSDetail.brgy_code:''],
      purok:[personPDSDetail?personPDSDetail.purok:''],
      zipCode:[personPDSDetail?personPDSDetail.zipCode:''],
      telNo:[personPDSDetail?personPDSDetail.telNo:''],
      mobileNo:[personPDSDetail?personPDSDetail.mobileNo:''],
      email:[personPDSDetail?personPDSDetail.email:''],
      is_deleted:[personPDSDetail?personPDSDetail.is_deleted:false],
      deleted_by:[personPDSDetail?personPDSDetail.deleted_by:''],
      deleted_date:[personPDSDetail?personPDSDetail.deleted_date:null],
      personFamily: this.fb.array([]),
      personTrainings: this.fb.array([]),
      personEducations: this.fb.array([]),
      personEligibilities: this.fb.array([]),
      personWorkExperiences: this.fb.array([]),
    });
    this.personPDSDetail.personTrainings.forEach(i => {
      this.createTrainingFormGroup(i, false);
    });
    this.personPDSDetail.personEducations.forEach(i => {
      this.createEducationFormGroup(i, false);
    });
    this.personPDSDetail.personEligibilities.forEach(i => {
      this.createEligibilitiesFormGroup(i,false);
    });
    this.personPDSDetail.personWorkExperiences.forEach(i => {
      this.createWorkExperiencesFormGroup(i,false);
    });
    this.personPDSDetail.personFamily.forEach(i => {
      this.createFamilyFormGroup(i,false);
    });
    this.getProvinceByRegion(this.personPDSDetail.region_code);
    this.getCityByProvince(this.personPDSDetail.prov_code);
    this.getBrgyByCity(this.personPDSDetail.city_code);
  }

    createFamilyFormGroup(personFamily: PersonFamily,isTriggered: boolean){
      let personFamilyFG: FormGroup = this.fb.group({
        personFamilyId:[personFamily? personFamily.personFamilyId: '00000000-0000-0000-0000-000000000000'],
        firstName:[personFamily? personFamily.firstName: ''],
        middleName:[personFamily? personFamily.middleName: ''],
        lastName:[personFamily? personFamily.lastName:''],
        extName:[personFamily? personFamily.extName:''],
        birthDate:[personFamily? personFamily.birthDate:''],
        occupation:[personFamily? personFamily.occupation:''],
        employer:[personFamily? personFamily.employer:''],
        businessAddress:[personFamily? personFamily.businessAddress:''],
        telNo:[personFamily? personFamily.telNo:''],
        relationship:[personFamily? personFamily.relationship:''],  
        is_deleted:[personFamily?personFamily.is_deleted:false],
        deleted_by:[personFamily?personFamily.deleted_by:''],
        deleted_date:[personFamily?personFamily.deleted_date:null],
      });
      if(isTriggered){this.selectedFamilyRecord = this.personFamilyFormArray.length;}
      this.personFamilyFormArray.push(personFamilyFG);
    }
    createTrainingFormGroup(personTraining:PersonTrainings, isTriggered:boolean){
      let personTrainingFG: FormGroup = this.fb.group({
        personTrainingId:[personTraining? personTraining.personTrainingId:'00000000-0000-0000-0000-000000000000'],
        seminarTitle:[personTraining? personTraining.seminarTitle:''],
        dateFrom:[personTraining? personTraining.dateFrom:''],
        dateTo:[personTraining? personTraining.dateTo:''],
        numHours:[personTraining? personTraining.numHours:''],
        conductedBy:[personTraining? personTraining.conductedBy:''],  
        is_deleted:[personTraining?personTraining.is_deleted:false],
        deleted_by:[personTraining?personTraining.deleted_by:''],
        deleted_date:[personTraining?personTraining.deleted_date:null],
        
      });
      if(isTriggered){this.selectedTrainingRecord = this.personTrainingFormArray.length;}
      this.personTrainingFormArray.push(personTrainingFG);
    }
    createEducationFormGroup(personEducations:PersonEducation, isTriggered:boolean){
      let personEducationFG: FormGroup = this.fb.group({
        personEducationId:[personEducations? personEducations.personEducationId:  '00000000-0000-0000-0000-000000000000'],
        nameOfSchool:[personEducations? personEducations.nameOfSchool:''],
        schoolLevelId:[personEducations? personEducations.schoolLevelId:''],
        yearGraduated:[personEducations? personEducations.yearGraduated:''],
        startDate:[personEducations? personEducations.startDate:''],
        endDate:[personEducations? personEducations.endDate:null],
        degreeCourse:[personEducations? personEducations.degreeCourse:''],
        highestAttaind:[personEducations? personEducations.highestAttaind:''],
        scholarshipAwardHonor:[personEducations? personEducations.scholarshipAwardHonor:''],  
        is_deleted:[personEducations?personEducations.is_deleted:false],
        deleted_by:[personEducations?personEducations.deleted_by:''],
        deleted_date:[personEducations?personEducations.deleted_date:null],
      });
      if(isTriggered){this.selectedEducationRecord = this.personEducationFormArray.length;}
      this.personEducationFormArray.push(personEducationFG);
    }
    createEligibilitiesFormGroup(personEligibilities:PersonEligibility, isTriggered:boolean){
      let PersonEligibilityFG: FormGroup = this.fb.group({
        personEligibilityId:[personEligibilities? personEligibilities.personEligibilityId:  '00000000-0000-0000-0000-000000000000'],
        eligibilityTitle:[personEligibilities? personEligibilities.eligibilityTitle:''],
        rating:[personEligibilities? personEligibilities.rating:''],
        dateOfExamination:[personEligibilities? personEligibilities.dateOfExamination:''],
        placeOfExamination:[personEligibilities? personEligibilities.placeOfExamination:''],
        licenseNumber:[personEligibilities? personEligibilities.licenseNumber:''],
        licensceReleaseDate:[personEligibilities? personEligibilities.licensceReleaseDate:''],  
        is_deleted:[personEligibilities?personEligibilities.is_deleted:false],
        deleted_by:[personEligibilities?personEligibilities.deleted_by:''],
        deleted_date:[personEligibilities?personEligibilities.deleted_date:null],
      });
      if(isTriggered){ this.selectedEligibilityRecord = this.personEligibilityFormArray.length; }
      this.personEligibilityFormArray.push(PersonEligibilityFG);
    }
    createWorkExperiencesFormGroup(personWorkExperiences: PersonWorkExperience, isTriggered: boolean){
      let PersonWorkExperienceFG: FormGroup = this.fb.group({
        personWorkExperienceId:[personWorkExperiences? personWorkExperiences.personWorkExperienceId: '00000000-0000-0000-0000-000000000000'],
        positionTitle:[personWorkExperiences? personWorkExperiences.positionTitle:''],
        companyName:[personWorkExperiences? personWorkExperiences.companyName:''],
        startDate:[personWorkExperiences? personWorkExperiences.startDate:''],
        endDate:[personWorkExperiences? personWorkExperiences.endDate:null],
        monthlySalary:[personWorkExperiences? personWorkExperiences.monthlySalary:''],
        salaryGrade:[personWorkExperiences? personWorkExperiences.salaryGrade:''],
        salaryStep:[personWorkExperiences? personWorkExperiences.salaryStep:''],
        appointmentStatusId:[personWorkExperiences? personWorkExperiences.appointmentStatusId:''],
        isGovt:[personWorkExperiences? personWorkExperiences.isGovt:false],  
        is_deleted:[personWorkExperiences?personWorkExperiences.is_deleted:false],
        deleted_by:[personWorkExperiences?personWorkExperiences.deleted_by:''],
        deleted_date:[personWorkExperiences?personWorkExperiences.deleted_date:null],
      });
      if(isTriggered){this.selectedWorkExpRecord = this.personWorkExperienceFormArray.length;}
      this.personWorkExperienceFormArray.push(PersonWorkExperienceFG);
    }
    get personTrainingFormArray(): FormArray{
      return this.PDSForm.get("personTrainings") as FormArray;
    }
    get personEducationFormArray(): FormArray{
      return this.PDSForm.get("personEducations") as FormArray;
    }
    get personEligibilityFormArray(): FormArray{
      return this.PDSForm.get("personEligibilities") as FormArray;
    }
    get personWorkExperienceFormArray(): FormArray{
      return this.PDSForm.get("personWorkExperiences") as FormArray;
    }
    get personFamilyFormArray(): FormArray{
      return this.PDSForm.get("personFamily") as FormArray;
    }

    eventHandler(btnclick:string){
      if(btnclick == "Save"){
        if(this.PDSForm.valid)
          this.saveRecord();
      }else if(btnclick == "Delete"){
        this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            //#region Mark as Deleted the Person Details
            this.PDSForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            //#endregion
            //#region  Mark as Deleted the Child Entities
            this.personPDSDetail.personFamily.forEach(i => {
              let x = this.personPDSDetail.personFamily.findIndex(w => w.personFamilyId == i.personFamilyId);
              this.personFamilyFormArray.at(x).patchValue({"is_deleted":true,"deleted_by":'Axl',"deleted_date":new Date()});
            });
            this.personPDSDetail.personEducations.forEach(i => {
              let x = this.personPDSDetail.personEducations.findIndex(w => w.personEducationId == i.personEducationId);
              this.personEducationFormArray.at(x).patchValue({"is_deleted":true,"deleted_by":'Axl',"deleted_date":new Date()});
            });
            this.personPDSDetail.personEligibilities.forEach(i => {
              let x = this.personPDSDetail.personEligibilities.findIndex(w => w.personEligibilityId == i.personEligibilityId);
              this.personEligibilityFormArray.at(x).patchValue({"is_deleted":true,"deleted_by":'Axl',"deleted_date":new Date()});
            });
            this.personPDSDetail.personWorkExperiences.forEach(i => {
              let x = this.personPDSDetail.personWorkExperiences.findIndex(w => w.personWorkExperienceId == i.personWorkExperienceId);
              this.personWorkExperienceFormArray.at(x).patchValue({"is_deleted":true,"deleted_by":'Axl',"deleted_date":new Date()});
            });
            this.personPDSDetail.personTrainings.forEach(i => {
              let x = this.personPDSDetail.personTrainings.findIndex(w => w.personTrainingId == i.personTrainingId);
              this.personTrainingFormArray.at(x).patchValue({"is_deleted":true,"deleted_by":'Axl',"deleted_date":new Date()});
            });
            //#endregion
            this.deleteRecord();
          }
        }); 
      }
    }

    saveRecord(){
      this.frmglobaldataserve.updateRecord(this.PDSForm.value,"Person/PostPDS")
        .subscribe(
          (response) =>
          {
            console.log("Record Saved Successfully: "+response);
            this.router.navigateByUrl("pages/forms/pds/"+response).then(x => {
              this.initData(), 
              localStorage.setItem('secPI',response);
              this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the Record: "+ JSON.stringify(this.PDSForm.value));
          }
        );
    });
    }

    deleteRecord(){
      this.frmglobaldataserve.updateRecord(this.PDSForm.value,"Person/PostPDS")
        .subscribe(
          (response) =>{
            console.log("Record Deleted Successfully: "+response);
            this.router.navigateByUrl("pages/forms/pds/list");
          },(error) =>{
            console.log("Error Deleting the Record: "+ JSON.stringify(this.PDSForm.value));
          }
        )
    }

    editTableRecord(table:string, selectedIndex:number){
      switch(table){
        case "family":
          this.selectedFamilyRecord = selectedIndex;
          break;
        case "education":
          this.selectedEducationRecord = selectedIndex;
          break;
        case "eligibility":
          this.selectedEligibilityRecord = selectedIndex;
          break;
        case "workExperience":
          this.selectedWorkExpRecord = selectedIndex;
          break;
        case "training":
          this.selectedTrainingRecord = selectedIndex;
          break;
        default:
          break;
      }
    }
    saveTableRecord(table:string){
      switch(table){
        case "family":
          this.selectedFamilyRecord = null;
          break;
        case "education":
          this.selectedEducationRecord = null;
          break;
        case "eligibility":
          this.selectedEligibilityRecord = null;
          break;
        case "workExperience":
          this.selectedWorkExpRecord = null;
          break;
        case "training":
          this.selectedTrainingRecord = null;
          break;
        default:
          break;
      }
    }
    private formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    }
  }
