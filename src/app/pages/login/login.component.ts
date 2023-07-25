import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
 
  loginForm: FormGroup = new FormGroup({});
  signUpForm: FormGroup = new FormGroup({});

  // Hardcoded credentials for demonstration purposes
  hardcodedUsername = 'user123';
  hardcodedPassword = 'password123';

  constructor(private formBuilder: FormBuilder) {
 }
 ngOnInit() {
     this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

 }

 get loginUsername() {
  return this.loginForm.get('username') as FormControl;
}

get loginPassword() {
  return this.loginForm.get('password') as FormControl;
}



  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Check if the provided username and password match the hardcoded credentials
      if (username === this.hardcodedUsername && password === this.hardcodedPassword) {
        // Authentication successful, perform any required action (e.g., redirect to home page)
        console.log('Login successful!');
      } else {
        // Authentication failed, show error message to the user
        console.log('Invalid username or password. Please try again.');
      }
    } else {
      // Handle form validation errors (if any)
      console.log('Login form is invalid. Please fill in all required fields.');
    }
  }


}

