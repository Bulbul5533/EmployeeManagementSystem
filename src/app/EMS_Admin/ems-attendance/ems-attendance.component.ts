import { Component, OnInit } from '@angular/core';
import { DBServiceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-ems-attendance',
  templateUrl: './ems-attendance.component.html',
  styleUrls: ['./ems-attendance.component.css']
})
export class EmsAttendanceComponent implements OnInit {

  var_Rtn_Approvals: any
  var_Single_Approvals: any
  var_GetApprovalsId: any

  constructor(public conservice: DBServiceService) { }

  ngOnInit(): void {
    this.FakeInit()
  }
  FakeInit(){
    this.conservice.collectAttendanceApprovals().subscribe((Rtn_Approvals) => {
      this.var_Rtn_Approvals = Rtn_Approvals
    })
  }

  SelectedCard(card: any) {
    this.var_Single_Approvals = card
  }

  GettingApprovals(data: any) {
    if (data === null) {
      alert("Please Select the Employee")
    }
    else {
      if (confirm("Are you sure?") === true) {
        this.conservice.approveSingleEmp(data).subscribe((Rtn_SingleApprovals) => {
          console.log('Rtn_SingleApprovals', Rtn_SingleApprovals)
        })
      }
    }

  }

  CancelLeave(data: any) {
    if (data === null) {
      alert("Please Select the Employee")
    }
    else {
      if (confirm("Are you sure?") === true) {
        this.conservice.cancelApprovals(data).subscribe((Rtn_SingleApprovals) => {
          console.log('Rtn_SingleApprovals', Rtn_SingleApprovals)
        })
        this.FakeInit();
      }
    }
  }
}
