import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ProjectModel} from '../../model/Projects/ProjectModel';


@Injectable()
export class ProjectService {
    baseUrl = 'http://localhost:8010/afra/project';
    public headers: Headers;

    constructor(private http: Http) {
        console.log('Services Running');
    }

    public getAllProject() {
        const url = this.baseUrl + '/projectAll';
        return this.http.get(url).map(res => res.json());
    }

    public getProjectById(id: string) {
        const url = this.baseUrl + '/ById/' + id + '';
        return this.http.get(url).map(res => res.json());
    }

    public updateProject(data: ProjectModel) {

        const url = this.baseUrl + '/update';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(url, JSON.stringify(data), {headers: headers} ).map(success => success.status);
    }

    public createProject(data: ProjectModel) {
        const url = this.baseUrl + '/create';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url, JSON.stringify(data), {headers: headers}).map(res => res);
    }

    public deleteProject(id: string) {
        const url = this.baseUrl + '/delete/' + id;
        return this.http.delete(url).map(res => res);
    }

}