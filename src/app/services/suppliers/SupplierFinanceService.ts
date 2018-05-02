
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SupplierFinanceService {
    initialUrl = '/afra/services';
    constructor( private http: Http) {
    }

    getAllSupplierFinance() {
        const modUrl = this.initialUrl + '/all';
        return this.http.get(modUrl).map(res => res.json());
    }
}