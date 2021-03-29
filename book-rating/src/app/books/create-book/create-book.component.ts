import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl(),
    price: new FormControl(),
  });

  isValid(name: string): boolean {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  submitForm(): void {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // ???
    // 1. Erstelle ein Event mit dem Namen `create``
    // 2. Feuer das Event mit dem neuen Buch
    // 3. Empfange das Buch im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu (Unveränderbarkeit beachten!)

    this.bookForm.reset();
  }
}
