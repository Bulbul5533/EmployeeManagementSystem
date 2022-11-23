import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBServiceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-ems-home',
  templateUrl: './ems-home.component.html',
  styleUrls: ['./ems-home.component.css']
})
export class EMSHomeComponent implements OnInit {

  showDepartment: boolean = false
  Var_Temp: any
  Var_LengthEmpinfo: any
  Var_LengthDept: any
  ids: any = [];
  Var_LengthApprovals: any


  constructor(private route: Router, public conservice: DBServiceService) { }

  ngOnInit(): void {
    this.DbCaller()
  }

  DbCaller() {
    //emp info caller
    this.conservice.GetEmpData().subscribe((Rtn_empinfo) => {
      this.Var_Temp = Rtn_empinfo
      this.Var_LengthEmpinfo = this.Var_Temp.length
      this.Var_LengthDept = this.Var_Temp.filter((data: any) => data.Department).length
      for (let result of this.Var_Temp) {
        this.ids.push(result.Department);
      }
      //console.log('ids before filter', this.ids)
      //department filter
      this.ids = this.ids.filter(function (elem: any, index: any, self: any) {
        return index === self.indexOf(elem);
      })
    })


    // Approvals caller
    this.conservice.collectAttendanceApprovals().subscribe((Rtn_approvalinfo) => {
      //console.log(Rtn_approvalinfo)
      this.Var_LengthApprovals = Rtn_approvalinfo
      console.log(this.Var_LengthApprovals.length)
      this.Var_LengthApprovals = this.Var_LengthApprovals.length
    })
  }

  Rtn_Total() {
    return this.Var_LengthDept
  }

  Rtn_Departments() {
    return this.ids.length
  }
  Rtn_Approvals() {
    return this.Var_LengthApprovals
  }
  Rtn_TotalDept() {
    return this.ids
  }
  Logout() {
    if (confirm("Are you sure?") === true) {
      this.route.navigate(['Home'])
    }
    else {

    }
  }

}
