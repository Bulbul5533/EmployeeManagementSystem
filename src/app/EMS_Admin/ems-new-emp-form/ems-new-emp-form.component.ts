import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DBServiceService } from 'src/app/dbservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ems-new-emp-form',
  templateUrl: './ems-new-emp-form.component.html',
  styleUrls: ['./ems-new-emp-form.component.css']
})
export class EmsNewEmpFormComponent implements OnInit {

  Var_depart_info: any
  var_Temp_data: any

  constructor(public datepipe: DatePipe, public fb: FormBuilder, public conservice: DBServiceService,) { }

  gather_data: FormGroup = new FormGroup({
    Personal_Details: new FormGroup({
      Employee_id: new FormControl(),
      Title: new FormControl(),
      First_Name: new FormControl(),
      Last_Name: new FormControl(),
      DOB: new FormControl(),
      Marital_Status: new FormControl(),
      Gender: new FormControl('Male', Validators.required)
    }),
    Role_And_Qualifications: new FormGroup({
      Role: new FormControl(),
      Qualification: new FormControl(),
      Type_of_Employee: new FormControl(),
      Project_Domain: new FormControl(),
      Department: new FormControl()
    }),
    Contacts: new FormGroup({
      Mobile_Number: new FormControl(null, Validators.min(10)),
      Address: new FormControl(),
      City: new FormControl(),
      Email: new FormControl(null, Validators.email),
      Personalid: new FormControl()
    })
  })
  ngOnInit(): void {
    this.conservice.Collect_Dept_Info().subscribe((Rtn_Depart: any) => {
      this.Var_depart_info = Rtn_Depart
    })
  }
  CreateEmp() {

    try {
      console.log(this.gather_data.get('Personal_Details.Gender')?.value)
      //const test =  this.gather_data.get('Personal_Details.Title')?.value
      this.var_Temp_data = {
        "Employee_id": this.gather_data.get('Personal_Details.Employee_id')?.value,
        "Personal_id": this.gather_data.get('Contacts.Personalid')?.value,
        "Title": this.gather_data.get('Personal_Details.Title')?.value,
        "First_name": this.gather_data.get('Personal_Details.First_Name')?.value,
        "Last_name": this.gather_data.get('Personal_Details.Last_Name')?.value,
        "DOB": this.datepipe.transform(this.gather_data.get('Personal_Details.DOB')?.value, 'dd-MM-YYYY'),
        "Mobile_Number": this.gather_data.get('Contacts.Mobile_Number')?.value,
        "City": this.gather_data.get('Contacts.City')?.value,
        "Address": this.gather_data.get('Contacts.Address')?.value,
        "Email": this.gather_data.get('Contacts.Email')?.value,
        // "Postal_code": "636113",
        "Qualification": this.gather_data.get('Role_And_Qualifications.Qualification')?.value,
        // "Current_experience": "2",
        "Start_date": "",
        "End_date": "",
        "Type_of_employee": this.gather_data.get('Role_And_Qualifications.Type_of_Employee')?.value,
        "Gender": this.gather_data.get('Personal_Details.Gender')?.value,
        "Marital_Status": this.gather_data.get('Personal_Details.Marital_Status')?.value,
        "Role": this.gather_data.get('Personal_Details.Marital_Status')?.value,
        "Project_Domain": this.gather_data.get('Role_And_Qualifications.Project_Domain')?.value,
        "Department": this.gather_data.get('Role_And_Qualifications.Department')?.value
      }

      console.log('Get data', this.var_Temp_data)
      this.conservice.NewEmpinfo(this.var_Temp_data).subscribe((Rtn_Updatedinfo) => {
        if (Rtn_Updatedinfo === true) {
          alert("Created Userinfo and Access")
        }
        else {
          alert("Something went wrong")
        }

      })
    }
    catch (error) {
      alert(error)
    }
  }
}
