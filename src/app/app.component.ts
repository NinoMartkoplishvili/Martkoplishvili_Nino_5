import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loadApiData() {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}
  title = 'MN5';
  constructor(private fb: FormBuilder) {}

userForm = this.fb.group({
  firstname: ['', [Validators.required, Validators.minLength(3)]],
  lastname: ['', [Validators.required, Validators.minLength(3)]],
  phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
  email: ['', [Validators.required, Validators.minLength(8)]]
});
}
