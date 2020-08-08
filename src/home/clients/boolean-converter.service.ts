import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooleanConverterService {
  constructor() {}

  public getYesNoVal(booleanVal: boolean) {
    if (booleanVal) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}
