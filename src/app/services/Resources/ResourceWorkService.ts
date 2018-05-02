import {Http} from '@angular/http';
import {ResourceWorkModel} from '../../model/Resources/ResourceWorkModel';

export class ResourceWorkService {
    baseUrl = 'http://localhost:8010/afra/resource/work';

    constructor(private http: Http) {}

    getAllResourceWork() {
        const url = this.baseUrl + '/all';
        return this.http.get(url).map(res => res.json());
    }

    getResourceWorkByProject(projectId: string) {
        const url = this.baseUrl + '/byProject{' + projectId + '}';
        return this.http.get(url).map(res => res.json());
    }

    getResourceWorkByResource(resourceId: string) {
        const url = this.baseUrl + '/byResource{' + resourceId + '}';
        return this.http.get(url).map(res => res.json());
    }

    getResourceWorkById(projectId: string, resourceId: string) {
        const url = this.baseUrl + '/byProject{' + projectId + '}/{' + resourceId + '}';
        return this.http.get(url).map(res => res.json());
    }

    createResourceWork(rwData: ResourceWorkModel) {
        const url = this.baseUrl + '/create';
        return this.http.post(url, JSON.stringify(rwData)).map(res => res.json());
    }

    updateResourceWork(rwData: ResourceWorkModel) {
        const url = this.baseUrl + '/create';
        return this.http.get(url, JSON.stringify(rwData)).map(res => res.json());
    }

    deleteResourceWork(projectId: string, resourceId: string) {
        const url = this.baseUrl + '/delete{' + projectId + '}/{' + resourceId + '}';
        return this.http.get(url).map(res => res.json());
    }
}