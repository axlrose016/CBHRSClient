import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-rerouter',
  templateUrl: './rerouter.component.html',
  styleUrls: ['./rerouter.component.scss']
})
export class RerouterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigateByUrl('pages/forms/pds/'+localStorage.getItem('secPI'));
  }

}
