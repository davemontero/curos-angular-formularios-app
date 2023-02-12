import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('myForm') myForm!: NgForm

  nombreValido(): boolean {
    return this.myForm?.controls['producto']?.invalid 
            && this.myForm?.controls['producto']?.touched
  }

  precioValido(): boolean {
    console.log(this.myForm)
    if (this.myForm?.controls['precio']?.touched 
        && this.myForm?.controls['precio']?.value === '') { return true }
    else if (this.myForm?.controls['precio']?.value < 0) {
      return true
    }
    return false
  }

  guardar() { 
    console.log('Posteo correcto')
    this.myForm.resetForm()
  }
}
3