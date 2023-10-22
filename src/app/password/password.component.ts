import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  public password = '';

  public lengthCheck = 0;
  public passwordCount = 0;

  passwordCheck(): void {
    const lengthTest = this.password.length
    const letters = /[a-zA-Z]/.test(this.password);
    const numbers = /\d/.test(this.password);
    const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/№]/.test(this.password);

    const testArray = [letters, numbers, symbols];
    const trueCount = testArray.filter(x => x == true).length;

    this.lengthCheck = lengthTest;
    this.passwordCount = trueCount;    
  }

}
