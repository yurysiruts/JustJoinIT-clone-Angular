import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUpAction } from '../../store/actions/signup.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output() registeredEvent = new EventEmitter<boolean>();
  form!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.registeredEvent.emit(true);
    // this.store.dispatch(signUpAction({ request: this.form.value }))
  }
}
