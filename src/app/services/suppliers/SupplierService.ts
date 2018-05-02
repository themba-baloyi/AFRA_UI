import {Http} from '@angular/http';
import {SuppliersModel} from '../../model/suppliers/SuppliersModel';

export class SupplierService {
    initialUrl = '/afra/supplier';

    constructor(private http: Http) {
    }

    getAllSuppliers() {
        return this.http.get(this.initialUrl + '/all').map(res => res.json());
    }

    getSupplierById(id: string) {
        return this.http.get(this.initialUrl + '/byId/{' + id + '}').map(res => res.json());
    }

    createSupplier(supplierData: SuppliersModel) {
        return this.http.get(this.initialUrl + '/create', JSON.stringify(supplierData)).map(res => res.json());
    }

    deleteSupplier(id: string) {
        return this.http.get(this.initialUrl + '/delete/{' + id + '}').map(res => res.json());
    }

    updateSupplier(supplierData: SuppliersModel) {
        return this.http.get(this.initialUrl + '/update', JSON.stringify(supplierData)).map(res => res.json());
    }
}