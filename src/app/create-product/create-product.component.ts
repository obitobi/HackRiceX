import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  @Output() isOpen: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log({...this.form.value});
    const product = {...this.form.value};
    this.isOpen.emit(product);
  }
}
