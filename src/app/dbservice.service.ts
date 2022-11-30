import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DBServiceService {
  readonly url = "http://127.0.0.1:3000"
  baseurl!: string

  lstrHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });

  constructor(public http: HttpClient) { }

  GetEmpData() {
    const body = ""
    this.baseurl = this.url + "/getAllEmployee";
    return this.http.post(this.baseurl, body);
  }

  CheckAccess(user: string, pass: string) {
    const body = ""
    this.baseurl = this.url + "/Login" + "/" + user + "/" + pass;
    //console.log(this.baseurl)
    return this.http.post(this.baseurl, body)
  }

  FindEmployee(userid: string) {
    // /find/empinfo/:S001
    const body = ""
    this.baseurl = this.url + "/find/empinfo" + "/" + userid;
    return this.http.post(this.baseurl, body)
  }
  LeaveApproval(approvals: any) {
    const body = ""
    this.baseurl = this.url + "/Emp/LeaveApproval/" + approvals;
    return this.http.post(this.baseurl, body);
  }
  collectEmpApprovals(empid: any) {
    const body = ""
    this.baseurl = this.url + "/Emp/Find/MyApprovals/" + empid;
    return this.http.post(this.baseurl, body);
  }

  collectAttendanceApprovals() {
    const body = ""
    this.baseurl = this.url + "/Emp/FindAll/allRequests"
    return this.http.post(this.baseurl, body)
  }

  approveSingleEmp(Approvalid: any) {
    const body = ""
    this.baseurl = this.url + "/Admin/Approve/" + Approvalid;
    console.log(this.baseurl)
    return this.http.post(this.baseurl, body)
  }

  cancelApprovals(Approvalid: any) {
    const body = ""
    this.baseurl = this.url + "/Admin/cancelApproval/" + Approvalid;
    return this.http.post(this.baseurl, body)
  }
  Collect_Dept_Info() {
    const body = ""
    this.baseurl = this.url + "/Admin/CollectDept";
    return this.http.post(this.baseurl, body);
  }

  Updateinfo(empid: any, info: any) {

    this.baseurl = this.url + "/emp/editinfo/" + empid
    return this.http.post(this.baseurl, info, { headers: this.lstrHeaders })

  }

  NewEmpinfo(NewEmpinfo:any){
    this.baseurl = this.url +"/adm/newemp/"
    return this.http.post(this.baseurl,NewEmpinfo, {headers:this.lstrHeaders})
  }
}
