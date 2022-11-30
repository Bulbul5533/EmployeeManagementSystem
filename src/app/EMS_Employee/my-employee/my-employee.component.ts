import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBServiceService } from 'src/app/dbservice.service';
import { DatePipe } from '@angular/common';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';




@Component({
  selector: 'app-my-employee',
  templateUrl: './my-employee.component.html',
  styleUrls: ['./my-employee.component.css']
})
export class MyEmployeeComponent implements OnInit {
  editme: boolean = true
  btnSubmit: boolean = true
  Empid: any
  var_EmployeeInfo: any
  var_Leave_From: any
  var_Leave_To: any
  var_Leave_Type: any
  var_Leave_Comment: any
  var_Leave_Combined: any
  selected = "Casual"
  Currentdate: Date = new Date();
  var_Temp_data: any


  constructor(public route: Router, private activeroute: ActivatedRoute, public conservice: DBServiceService, public fb: FormBuilder, public datepipe: DatePipe, public bottomSheet: MatBottomSheet) { }

  getEditedInfo = this.fb.group({
    Basic_Info: this.fb.group({
      Employee_id: [],
      Title: [],
      First_name: [],
      Last_name: [],
      Gender: [],
      DOB: [],
      Marital_Status: []
    }),
    Role_And_Qualifications: this.fb.group({
      Role: [],
      Qualification: [],
      Type_of_employee: [],
      Project_Domain: [],
      Department: []
    }),
    Contacts: this.fb.group({
      Email: [],
      Mobile_Number: [],
      Address: [],
      Personal_id: [],
      City: []
    })
  })


  GetAttadanceinfo = this.fb.group({
    From_Date: [new Date(), Validators.required],
    To_Date: [new Date(), Validators.required],
    LeaveType: [this.selected, Validators.required],
    LeaveComments: ['Reason for Leave', Validators.required]
  })


  ngOnInit() {
    // console.log(this.Currentdate)
    //this.Get_data= this.route.getCurrentNavigation()?.extras.state
    //console.log('empdata',this.Get_data)
    this.Empid = this.activeroute.snapshot.paramMap.get('Empid');
    //console.log('empid',this.Get_data)
    this.conservice.FindEmployee(this.Empid).subscribe((Rtn_data: any) => {
      this.var_EmployeeInfo = Rtn_data;
      //  console.log('before titel -- ', this.var_EmployeeInfo)
      this.getEditedInfo.controls['Basic_Info'].patchValue(this.var_EmployeeInfo[0]);
      this.getEditedInfo.controls['Role_And_Qualifications'].patchValue(this.var_EmployeeInfo[0]);
      this.getEditedInfo.controls['Contacts'].patchValue(this.var_EmployeeInfo[0]);
    })

  }
  Editor() {
    alert("edit")
    this.editme = false
    this.btnSubmit = false
  }


  Logout() {
    if (confirm("Are you sure?") === true) {
      this.route.navigate(['Home'])
    }
    else {

    }

  }

  RequestLeave() {
    this.var_Leave_From = this.GetAttadanceinfo.controls['From_Date'].value
    this.var_Leave_From = this.datepipe.transform(this.var_Leave_From, 'dd-MM-YYYY')
    this.var_Leave_To = this.GetAttadanceinfo.controls['To_Date'].value
    this.var_Leave_To = this.datepipe.transform(this.var_Leave_To, 'dd-MM-YYYY')
    console.log(this.var_Leave_From, this.var_Leave_To)
    this.var_Leave_Type = this.GetAttadanceinfo.controls['LeaveType'].value
    this.var_Leave_Comment = this.GetAttadanceinfo.controls['LeaveComments'].value
    if (this.var_Leave_From === null && this.var_Leave_To === null && this.var_Leave_Type === null && this.var_Leave_Comment === null) {
      alert("Enter all the required info")
    }
    else {
      this.var_Leave_Combined = this.var_EmployeeInfo[0].Employee_id + "$" + this.var_EmployeeInfo[0].First_name + "$" + this.var_Leave_From + "$" + this.var_Leave_To + "$" + this.var_Leave_Type + "$" + this.var_Leave_Comment
      console.log(this.var_Leave_Combined)
      this.conservice.LeaveApproval(this.var_Leave_Combined).subscribe((Rtn_approval) => {
        console.log('got', Rtn_approval)
        if (Rtn_approval === true) {
          alert("Waiting for Manager Approval")
        }
        else if (Rtn_approval === false || Rtn_approval === null) {
          alert("Something went wrong contact admin")
        }
      })
    }

  }
  OpenBottomSheet() {
    const passEmpId = this.var_EmployeeInfo[0].Employee_id
    const openBSheet = this.bottomSheet.open(BottomSheetComponent, {
      data: { passEmpId }
    })

  }

  Submit() {

    this.var_Temp_data = {
      "Employee_id": this.getEditedInfo.get('Basic_Info.Employee_id')?.value,
      "Personal_id": this.getEditedInfo.get('Contacts.Personal_id')?.value,
      "Title": this.getEditedInfo.get('Basic_Info.Title')?.value,
      "First_name": this.getEditedInfo.get('Basic_Info.First_name')?.value,
      "Last_name": this.getEditedInfo.get('Basic_Info.Last_name')?.value,
      "DOB": this.getEditedInfo.get('Basic_Info.DOB')?.value,
      "Mobile_Number": this.getEditedInfo.get('Contacts.Mobile_Number')?.value,
      "City": this.getEditedInfo.get('Contacts.City')?.value,
      "Address": this.getEditedInfo.get('Contacts.Address')?.value,
      "Email": this.getEditedInfo.get('Contacts.Email')?.value,
      // "Postal_code": "636113",
      "Qualification": this.getEditedInfo.get('Role_And_Qualifications.Qualification')?.value,
      // "Current_experience": "2",
      "Start_date": "",
      "End_date": "",
      "Type_of_employee": this.getEditedInfo.get('Role_And_Qualifications.Type_of_employee')?.value,
      "Gender": this.getEditedInfo.get('Basic_Info.Gender')?.value,
      "Marital_Status": this.getEditedInfo.get('Basic_Info.Marital_Status')?.value,
      "Role": this.getEditedInfo.get('Basic_Info.Marital_Status')?.value,
      "Project_Domain": this.getEditedInfo.get('Role_And_Qualifications.Project_Domain')?.value,
      "Department": this.getEditedInfo.get('Role_And_Qualifications.Department')?.value
    }
    // console.log(this.getEditedInfo.value)
    // console.log(this.var_Temp_data)
    this.conservice.Updateinfo(this.getEditedInfo.get('Basic_Info.Employee_id')?.value, JSON.stringify(this.var_Temp_data)).subscribe((Rtn_data: any) => {
      console.log('Rtn', Rtn_data)
    })
  }
}
