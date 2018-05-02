import {Http} from '@angular/http';
import {SupplierProjectModel} from '../../model/suppliers/SupplierProjectModel';

export class SupplierProjectService {

    baseUrl = '/afra/supplier/project';

    constructor(private http: Http) {}

    getAllSupplierProject() {
        this.http.get(this.baseUrl + '/all').map(res => res.json());
    }

    getSupplierProject(supplierId: string, projectId: string) {
        const url = this.baseUrl + '/byIds/{' + supplierId + '}/{' + projectId + '}';
        return this.http.get(url).map(res => res.json());
    }

    getAllSupplierByProject(projectId: string) {
        const url = this.baseUrl + '/byProject/{' + projectId + '}';
        return this.http.get(url).map(res => res.json());
    }

    getAllSupplierBySupplier(supplierId: string) {
        const url = this.baseUrl + '/bySupplier/{' + supplierId + '}';
        return this.http.get(url).map(res => res.json());
    }

    createSupplierProject(spData: SupplierProjectModel) {
        const url = this.baseUrl + '/create';
        return this.http.post(url, JSON.stringify(spData)).map(res => res.json());
    }

    deleteSupplierProject(projectId: string, supplierId: string) {
        const url = this.baseUrl + '/delete/{' + projectId + '}/{' + supplierId + '}';
        return this.http.delete(url).map(res => res.json());
    }

    updateSupplierProject(spData: SupplierProjectModel) {
        const url = this.baseUrl + '/update';
        return this.http.post(url, JSON.stringify(spData)).map(res => res.json());
    }
}