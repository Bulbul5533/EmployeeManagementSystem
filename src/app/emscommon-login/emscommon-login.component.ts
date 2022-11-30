import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DBServiceService } from '../dbservice.service';

@Component({
  selector: 'app-emscommon-login',
  templateUrl: './emscommon-login.component.html',
  styleUrls: ['./emscommon-login.component.css']
})
export class EMSCommonLoginComponent implements OnInit {
  var_Username: any
  var_Pass: any
  var_Rtndata!: any
  var_AccessCode: any
  var_empid: any
  constructor(public fb: FormBuilder, public conservice: DBServiceService, public route: Router) { }
  GetLoginInfo = this.fb.group({
    Usercode: ['', Validators.required],
    Passcode: ['', Validators.required]
  })
  ngOnInit(): void {
  }
  async SignIn() {
    this.var_Username = this.GetLoginInfo.controls['Usercode'].value
    this.var_Pass = this.GetLoginInfo.controls['Passcode'].value
    if (this.var_Username === "" || this.var_Pass === "") {
      alert("Enter UserName and password");
    }
    else {
      this.conservice.CheckAccess(this.var_Username, this.var_Pass).subscribe((Rtndata) => {
        this.var_Rtndata = Rtndata
        if (Rtndata === "Unauthorized") {
          alert("Please Enter Correct username and password")
        }
        else {
          this.var_AccessCode = this.var_Rtndata[0].Access_Code
          //  console.log('type', typeof (this.var_AccessCode))
          console.log('adfda', this.var_Rtndata[0].Access_Code)
          if (this.var_AccessCode === 1) {
            this.var_empid = this.var_Rtndata[0].User_Name
            console.log(this.var_empid)
       //   this.route.navigate(['EmpHome'],{relativeTo:this.ActivateRouter})
        //this.route.navigate(['EmpHome',{state:this.var_empid}])

        this.route.navigate(['EmpHome/' + this.var_empid])
            // ,{state:this.var_Rtndata}
          }
          else if (this.var_AccessCode === 0) {
            this.route.navigate(['AdHome'])
          }
        }
      })
    }

  }
}
