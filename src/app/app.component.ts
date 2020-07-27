import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) myForm: NgForm;
  defaultQuestion: string = 'grandma';


  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(form: NgForm) {
    console.log(this.myForm)
  }
    // onSubmit(form: NgForm) {
    //  console.log('submited!');
    //  console.log(form);
    //  console.log(form.value);
    // }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form.value);
  //   console.log(form.value.email);
  // }
}
