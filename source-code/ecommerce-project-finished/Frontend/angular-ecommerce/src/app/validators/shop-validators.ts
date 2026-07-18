import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ShopValidators {
  // whitespace validation
  static notOnlyWhitespace(control: AbstractControl): ValidationErrors | null {
    // check if string only contains whitespace
    if (control.value != null && control.value.trim().length === 0) {
      return { notOnlyWhitespace: true };
    }

    // valid, return null
    return null;
  }
}
