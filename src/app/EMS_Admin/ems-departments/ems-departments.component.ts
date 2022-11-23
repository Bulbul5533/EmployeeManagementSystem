import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { DBServiceService } from 'src/app/dbservice.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ems-departments',
  templateUrl: './ems-departments.component.html',
  styleUrls: ['./ems-departments.component.css']
})
export class EMSDepartmentsComponent implements OnInit {

  @Input() DeptData: any
 
  Var_DeptData: any
  constructor(public conservice: DBServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.DeptData)
    this.Debt_DbCaller();
  }
  Debt_DbCaller() {
    this.conservice.Collect_Dept_Info().subscribe((Rtn_Dept_data: any) => {
      this.Var_DeptData = Rtn_Dept_data
    })
  }
  
  DialogCaller() {
  //  this.dialog.open(this.HiddenDialog)
  }

}
