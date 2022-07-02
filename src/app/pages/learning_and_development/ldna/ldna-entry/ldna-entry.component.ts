import { Component, Injectable, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LDNADetails, LDNAResults } from 'app/shared/model/learningAndDevelopment.model';
import { lib_competency_category, lib_core_competency, lib_department } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { LibraryService } from 'app/shared/service/library.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-ldna-entry',
  templateUrl: './ldna-entry.component.html',
  styleUrls: ['./ldna-entry.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class LdnaEntryComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: string = null;
  public LDNAForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public lib_department: lib_department[];
  public lib_core_competency: lib_core_competency[];
  public lib_competency_category: lib_competency_category[];
  public selectedCoreCompetency: number;
  ldnaDetail: LDNADetails = {
    ldnaResults:[],
  };
  constructor(
    private dialogserve:DialogService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private libraries_svc : LibraryService
  ) { 
    this.libraries_svc.loadAllLibrary();
  }

  ngOnInit(): void {
    this.lib_core_competency = this.libraries_svc.lib_core_competencies_svc;
    this.lib_competency_category = this.libraries_svc.lib_competency_categories_svc;
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
      this.lib_department = JSON.parse(sessionStorage.getItem('lib_department'));
      this.curRecordId = this.route.snapshot.params['id'];
      if(this.curRecordId != "0"){
        this.getLDNA();
      }else{
        this.buildLDNADetail();
      }
      //this.getCoreCompetency();
  }

  getLDNA(){
    this.frmglobaldataserve.getRecord("LDNA/GetLDNA/"+this.curRecordId)
      .subscribe((data: LDNADetails) => {
        this.ldnaDetail = data;
        this.buildLDNADetail(this.ldnaDetail);
      })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.LDNAForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
    }
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.LDNAForm.value,"LDNA/PostLDNA")
      .subscribe(
        (response) =>{
          console.log("Record Saved Successfully: "+ response);
          this.router.navigateByUrl("pages/learning-and-development/ldna/"+response).then(x =>{
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>{
            console.log("Error Saving the Record: "+ JSON.stringify(this.LDNAForm.value));
          });
        }
      )
  }

  buildLDNADetail(ldnaDetail?:LDNADetails){
    this.LDNAForm = this.fb.group({
      ldnaId:[ldnaDetail?ldnaDetail.ldnaId: Guid.raw],
      departmentId:[ldnaDetail?ldnaDetail.departmentId:0],
      ldnaResults:this.fb.array([]),
    });

    this.ldnaDetail.ldnaResults.forEach(i => {
      this.createLDNAResultFormGroup(i);
    });
  }

  openCoreCompetencyDialog(){
    this.dialogserve.openFormDialog('CoreCompetency');
  }

  ngDoCheck(){
    if(this.dialogserve.selectedCoreCompetency$ != undefined && this.dialogserve.doCheckController$.value == true){
          this.createCoreCompetencyFormGroup(<lib_core_competency>this.dialogserve.selectedCoreCompetency$);
          this.dialogserve.setDoCheckController(false);
        };
  }

  createCoreCompetencyFormGroup(libCoreCompetency:lib_core_competency){
    let coreCompetencyFG = this.fb.group({
      coreCompetencyId:[libCoreCompetency?libCoreCompetency.coreCompetencyId: 0],
      description:[libCoreCompetency?libCoreCompetency.description:''],
      libCompetencyCategory: this.fb.array([]),
    });

    libCoreCompetency.libCompetencyCategory.forEach(i => {
      this.createLDNAResultFormGroup(i, libCoreCompetency, i.description);
    });
  }

  createLDNAResultFormGroup(ldnaResult?:LDNAResults, libCoreCompetency?: lib_core_competency, competencyDesc?: string){
    let ldnaResultFG:FormGroup = this.fb.group({
      ldnaResultId:[ldnaResult.ldnaResultId? ldnaResult.ldnaResultId: Guid.raw],
      coreCompetencyId:[ldnaResult.coreCompetencyId? ldnaResult.coreCompetencyId : libCoreCompetency.coreCompetencyId? libCoreCompetency.coreCompetencyId : null],
      coreCompetencyDesc:[libCoreCompetency? libCoreCompetency.description: null],
      competencyId:[ldnaResult.competencyId? ldnaResult.competencyId: null],
      competencyDesc:[competencyDesc? competencyDesc : null],
      permanent:[ldnaResult.permanent? ldnaResult.permanent:0],
      contractual:[ldnaResult.contractual? ldnaResult.contractual:0]
    });
    this.ldnaResultFormArray.push(ldnaResultFG);
  }

  get ldnaResultFormArray(): FormArray{
    return this.LDNAForm.get("ldnaResults") as FormArray;
  }  
}
