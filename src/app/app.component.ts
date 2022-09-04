import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorObject } from './shared/interfaces/error-object.interface';
import { Pipeline } from './shared/interfaces/pipeline.interface';

type K = keyof ErrorObject;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-typescript';

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    nome: new FormControl('243', Validators.min(2))
  })

  errorObject: ErrorObject = {
    required: 'Campo errado',
    min: 'Valor minimo xpto'
  }
  
  ngOnInit(): void {
    this.checkErrors();
  }

  checkErrors() {
    console.log(this.form);
    const controls = this.form.controls;
    // const controls = this.form.controls as { [key: string]: FormControl };
    Object.keys(controls).forEach(key => {
      
      Object.entries(this.errorObject).forEach(([errorName, errorValue]) => {
        const keyName = Object.keys(this.errorObject).forEach(keyObject => {
          const errors = controls[key].errors;
          const targetError = errors?.[keyObject];
          if(errors && targetError) {
            const typeOf = keyObject as K;
            console.log(this.errorObject[typeOf]);
          }
        })
      })
    })
  }

}
