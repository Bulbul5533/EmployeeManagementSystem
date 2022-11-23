import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {
  TempForm: any
  temp: any
  constructor(public fb: FormBuilder) { }

  addform = this.fb.group({
    Category: new FormControl(),
    Sub_Category: new FormControl(),
    Start_Time: new FormControl(),
    End_Time: new FormControl(),
    NewRowz: this.fb.array([])
  })

  ngOnInit(): void {
  }

  addTasks() {
    const Hello = this.addform.get('NewRowz') as FormArray
    Hello.push(this.createForm())
    console.log(Hello)
    console.log(this.addform)
    console.log(this.addform.controls['NewRowz'])
  }
  createForm() {
    return this.fb.group({
      Temp_Category: ['Hello'],
      Temp_Sub_Catergory: ['how'],
      Temp_Start_Time: ['are'],
      Temp_End_Time: ['you']
    })
  }
}
