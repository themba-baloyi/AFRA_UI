import {Http} from '@angular/http';
import {DepartmentsModel} from '../../model/Department/DepartmentsModel';

export class DepartmentService {
    baseUrl = 'afra/department';

    constructor(private http: Http) {}

    getAllDepartments() {
        const modUrl = this.baseUrl + '/all';
        return this.http.get(modUrl).map(res => res.json());
    }

    getDepartmentsById(id: any) {
        const modUrl = this.baseUrl + '/{' + id + '}';
        return this.http.get(modUrl).map(res => res.json());
    }

    createDepartment(deptData: DepartmentsModel) {
        const modUrl = this.baseUrl + '/create';
        return this.http.post(modUrl, JSON.stringify(deptData)).map(res => res.json());
    }

    updateDepartment(deptData: DepartmentsModel) {
        const modUrl = this.baseUrl + '/create';
        return this.http.put(modUrl, JSON.stringify(deptData)).map(res => res.json());
    }

    deleteDepartment(id: any) {
        const modUrl = this.baseUrl + '/delete/{' + id + '}';
        return this.http.delete(modUrl).map(res => res.json());
    }
}