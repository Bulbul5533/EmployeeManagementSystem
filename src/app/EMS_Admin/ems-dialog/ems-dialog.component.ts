import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DBServiceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-ems-dialog',
  templateUrl: './ems-dialog.component.html',
  styleUrls: ['./ems-dialog.component.css']
})
export class EMSDialogComponent implements OnInit {

  Empinfo: any
  var_editMe: boolean = true
  var_superEdit: boolean = true
  var_submitbtn: boolean = true
  var_Editbtn: boolean = false
  var_SuperEditbtn: boolean = false

  var_ColletedData: any
  var_Employee_id: any
  var_First_name: any
  var_Last_name: any
  var_Gender: any
  var_DOB: any
  var_Marital_Status: any
  var_Role: any
  var_Qualification: any
  var_Type_of_employee: any
  var_Project_Domain: any
  var_Department: any
  var_Email: any
  var_Mobile_Number: any
  var_Address: any

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { data: any }, public datepipe: DatePipe, public conservice: DBServiceService) { }

  Update_info = this.fb.group({
    Basic_Info: this.fb.group({
      Title: new FormControl(),
      Employee_id: new FormControl(),
      First_name: new FormControl(),
      Last_name: new FormControl(),
      Gender: new FormControl(),
      DOB: new FormControl(),
      Marital_Status: new FormControl()
    }),
    Role_and_Qualification: this.fb.group({
      Role: new FormControl(),
      Qualification: new FormControl(),
      Type_of_employee: new FormControl(),
      Project_Domain: new FormControl(),
      Department: new FormControl()
    }),
    Contacts: this.fb.group({
      Email: new FormControl(),
      Personalid: new FormControl(),
      Mobile_Number: new FormControl(),
      Address: new FormControl(),
      City: new FormControl()
    })
  })

  ngOnInit(): void {

    this.Empinfo = this.data
    //console.log('dialog', this.Empinfo)
    this.Update_info.controls['Basic_Info'].patchValue(this.Empinfo);
    this.Update_info.controls['Role_and_Qualification'].patchValue(this.Empinfo);
    this.Update_info.controls['Contacts'].patchValue(this.Empinfo);
  }

  EditMe() {
    this.var_editMe = !this.var_editMe
    this.var_submitbtn = false
  }

  SuperEdit() {
    this.var_editMe = false
    this.var_superEdit = !this.var_superEdit
    this.var_submitbtn = false
  }

  DataPush() {
    try{
      console.log('test', this.Update_info.get('Role_and_Qualification.Department')?.value)
      this.var_ColletedData = {
        "Employee_id": this.Empinfo.Employee_id,
        "Personal_id": this.Update_info.get('Contacts.Personalid')?.value,
        "Title": this.Update_info.get('Basic_Info.Title')?.value,
        "First_name": this.Update_info.get('Basic_Info.First_name')?.value,
        "Last_name": this.Update_info.get('Basic_Info.Last_name')?.value,
        "DOB": this.Update_info.get('Basic_Info.DOB')?.value,
        "Mobile_Number": this.Update_info.get('Contacts.Mobile_Number')?.value,
        "City": this.Update_info.get('Contacts.City')?.value,
        "Address": this.Update_info.get('Contacts.Address')?.value,
        "Email": this.Update_info.get('Contacts.Email')?.value,
        // "Postal_code": "636113",
        "Qualification": this.Update_info.get('Role_and_Qualification.Qualification')?.value,
        // "Current_experience": "2",
        "Start_date": "",
        "End_date": "",
        "Type_of_employee": this.Update_info.get('Role_and_Qualification.Type_of_employee')?.value,
        "Gender": this.Update_info.get('Basic_Info.Gender')?.value,
        "Marital_Status": this.Update_info.get('Basic_Info.Marital_Status')?.value,
        "Role": this.Update_info.get('Basic_Info.Marital_Status')?.value,
        "Project_Domain": this.Update_info.get('Role_and_Qualification.Project_Domain')?.value,
        "Department": this.Update_info.get('Role_and_Qualification.Department')?.value
      }
      console.log(this.var_ColletedData)
      this.conservice.Updateinfo(this.Empinfo.Employee_id, this.var_ColletedData).subscribe((Rtn_Data) => {
  
        if (Rtn_Data === "Data_Updated") {
          alert('Data Updated')
        }
        else if (Rtn_Data === "Not") {
          alert("Data Not Updated Please contact Admin Team")
        }
      })
    }
    catch(error){
      alert(error)

    }
  }

}
