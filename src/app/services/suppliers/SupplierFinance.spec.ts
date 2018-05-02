import {inject, TestBed} from '@angular/core/testing';

import {Http} from '@angular/http';
import {SupplierFinanceService} from './SupplierFinanceService';

describe('Suppliers finance', () => {
   beforeEach(() => {
       TestBed.configureTestingModule({
           providers: [{provide: Http}, SupplierFinanceService]
       });
   }) ;

   it('success', inject([SupplierFinanceService], (service: SupplierFinanceService) => {
       expect(service).toBeTruthy();
   }));
});
