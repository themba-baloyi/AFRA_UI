import {Http, Headers} from '@angular/http';
import {ResourceModel} from '../../model/Resources/ResourceModel';
import {Injectable} from '@angular/core';

@Injectable()
export class ResourceService {
    baseUrl = 'http://localhost:8010/afra/resources';
    public headers: Headers;
    constructor(private http: Http) {}

    getAllResources() {
        const url = this.baseUrl + '/all';
        return this.http.get(url).map(res => res.json());
    }

    getResourceById(id: string) {
        const url = this.baseUrl + '/byId/' + id;
        return this.http.get(url).map(res => res.json());
    }

    createResource(resourceData: ResourceModel) {
        const url = this.baseUrl + '/create';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url, JSON.stringify(resourceData), {headers: headers}).map(res => res.json());
    }

    updateResource(resourceData: ResourceModel) {
        const url = this.baseUrl + '/update';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(url, JSON.stringify(resourceData), {headers: headers}).map(res => res.status);
    }

    deleteResource(id: string) {
        const url = this.baseUrl + '/delete/' + id ;
        return this.http.delete(url).map(res => res);
    }

}