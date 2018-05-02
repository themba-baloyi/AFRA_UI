import {Http} from '@angular/http';
import {FinanceProjModel} from '../../model/Finance/FinanceProjModel';

export class ProjectHoursService {
    baseUrl = '/afra/project/finance';

    constructor(private http: Http) {}

    createProjectCost(pfData: FinanceProjModel) {
        const url = this.baseUrl + '/create';
        return this.http.post(url, JSON.stringify(pfData)).map(res => res.json());
    }

    deleteProjectCost(id: string) {
        const url = this.baseUrl + '/delete/ById/{' + id + '}';
        return this.http.delete(url).map(res => res.json());
    }

    viewProjectCost(id: string) {
        const url = this.baseUrl + '/get/{' + id + '}';
        return this.http.get(url).map(res => res.json());
    }

    updateProjectCost(pfData: FinanceProjModel) {
        const url = this.baseUrl + '/update';
        return this.http.post(url, JSON.stringify(pfData)).map(res => res.json());
    }
}