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
  answer: string = '';
  genders = ['male', 'female', 'inBetween'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      },
      questionAnswer: 'Eurídice'
    })
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // })
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secret = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;
  }
  // onSubmit(form: NgForm) {
  //   console.log(this.myForm)
  // }
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
