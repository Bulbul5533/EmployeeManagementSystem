import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DBServiceService } from 'src/app/dbservice.service';
import { EMSDialogComponent } from '../ems-dialog/ems-dialog.component';

@Component({
  selector: 'app-ems-all-empinfo',
  templateUrl: './ems-all-empinfo.component.html',
  styleUrls: ['./ems-all-empinfo.component.css']
})
export class EmsAllEmpinfoComponent implements OnInit {
  var_Rtndata: any
  var_txt_searchvalue: string = ''
  var_selected: any

  constructor(public conservice: DBServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.conservice.GetEmpData().subscribe((Rtn_data) => {
      this.var_Rtndata = Rtn_data
      //console.log('adfdaf', this.var_Rtndata)
    })
  }
  OnSearched(Search: string) {
    this.var_txt_searchvalue = Search
    // console.log(this.var_txt_searchvalue)
  }

  openDialog(selected_data: any) {
    //console.log('selected', selected_data)
    this.var_selected = selected_data
    const dialogRef = this.dialog.open(EMSDialogComponent, {
      data: this.var_selected,
      width: '700px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }
}
