import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { DBServiceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  var_date: any
  temp: any
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public conservice: DBServiceService) { }

  ngOnInit(): void {
    console.log('date', this.data.passEmpId)

    this.conservice.collectEmpApprovals(this.data.passEmpId).subscribe((Returndata) => {
      console.log('Rtndate', Returndata)
      this.var_date = Returndata;
      if (this.var_date.Approval_Status === 0) {
        this.temp = 'Waiting'
      }
      else if (this.var_date.Approval_Status === 1) {
        this.temp = 'Approved'
      }
    })

  }

}
