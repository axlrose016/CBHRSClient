import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { lib_brgy, lib_city, lib_competency_category, lib_core_competency, lib_department, lib_job_category, lib_province, lib_region, lib_request_type } from '../model/library.model';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public baseUrl = environment.apiUrl;
  public lib_region_svc: lib_region[] = [];
  public lib_province_svc: lib_province[] = [];
  public lib_city_svc: lib_city[] = [];
  public lib_brgy_svc: lib_brgy[] = [];
  public lib_request_type_svc: lib_request_type[] = [];
  public lib_departments_svc: lib_department[] = [];
  public lib_job_categories_svc : lib_job_category[] = [];
  public lib_core_competencies_svc : lib_core_competency[] = [];
  public lib_competency_categories_svc : lib_competency_category[] = [];
  constructor(private httpc:HttpClient) { }

  loadAllLibrary(){
    this.loadRegions();
    this.loadProvinces();
    this.loadCities();
    this.loadBarangays();
    this.loadRequestTypes();
    this.loadDepartments();
    this.loadJobCategories();
    this.loadCoreCompetencies();
    this.loadCompetencyCategories();
  }
  loadRegions(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllRegion')
    .subscribe((res: lib_region[]) => {
      this.lib_region_svc = res;    
      sessionStorage.setItem("lib_region", JSON.stringify(res));
    });
  }

  loadProvinces(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllProvince')
    .subscribe((res: lib_province[]) => {
      this.lib_province_svc = res;
      sessionStorage.setItem("lib_province",JSON.stringify(res));
    });
  }

  loadCities(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllCity')
      .subscribe((res: lib_city[]) => {
        this.lib_city_svc = res;
        sessionStorage.setItem("lib_city",JSON.stringify(res));
      });
  }

  loadBarangays(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllBrgy')
      .subscribe((res: lib_brgy[]) => {
        this.lib_brgy_svc = res;
        sessionStorage.setItem("lib_brgy",JSON.stringify(res));
      })
  }

  loadRequestTypes(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllRequestType')
      .subscribe((res: lib_request_type[]) => {
        this.lib_request_type_svc = res;
        sessionStorage.setItem("lib_request_type",JSON.stringify(res));
      });
  }

  loadDepartments(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllDepartment')
      .subscribe((res: lib_department[]) => {
        this.lib_departments_svc = res;
        sessionStorage.setItem("lib_department",JSON.stringify(res));
      });
  }

  loadJobCategories(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllJobCategory')
      .subscribe((res: lib_job_category[]) => {
        this.lib_job_categories_svc = res;
        sessionStorage.setItem("lib_job_category",JSON.stringify(res));
      });
  }

  loadCoreCompetencies(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllCoreCompetency')
      .subscribe((res: lib_core_competency[]) => {
        this.lib_core_competencies_svc = res;
        sessionStorage.setItem("lib_job_category",JSON.stringify(res));
      })
  }

  loadCompetencyCategories(){
    return this.httpc.get(this.baseUrl + 'Library/GetAllCompetencyCategory')
      .subscribe((res: lib_competency_category[]) => {
        this.lib_competency_categories_svc = res;
        sessionStorage.setItem("lib_competency_category",JSON.stringify(res));
      })
  }
}
