import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {User} from '../../models/User';
import {users} from '../../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = users;

  name = new FormControl('', [Validators.required, Validators.minLength(2), this.customValidator]);
  age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]);
  myForm = new FormGroup({
    name: this.name,
    age: this.age,
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  add(myForm: FormGroup): void {
    users.push({name: this.myForm.value.name, age: this.myForm.value.age});
    this.age.patchValue('');
    this.name.patchValue('');
    console.log(this.myForm);

  }

  customValidator(inputData: AbstractControl): any {
    console.log(inputData);
    if (inputData.value === 'Anton') {
      return {error: true, msg: 'Sorry Anton, you are temporarily banned'};
    } else {
      return null;
    }

  }
}

