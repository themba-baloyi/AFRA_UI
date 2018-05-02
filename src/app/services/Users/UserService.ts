import {Http} from '@angular/http';
import {UsersModel} from '../../model/User/UsersModel';

export class UserService {

    initialUrl = '/afra/user';
    constructor(private http: Http) {
    }

    login() {
        const modUrl = this.initialUrl + '/login';
        return this.http.get(modUrl).map(res => res.json());
    }

    registerUser(data: UsersModel) {
        if (data != null) {
           // const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post(this.initialUrl + '/register', JSON.stringify(data)).map(res => res.json());
        }
    }

    updateUser(userData: UsersModel) {
        if (userData != null) {
            return this.http.put(this.initialUrl + '/update', JSON.stringify(userData)).map(res => res.json());
        }else {
        }
    }

    deleteUser (abNumber: string) {
        if (abNumber != null) {
            return this.http.delete(this.initialUrl + '/delete/{' + abNumber + '}').map(res => res.json());
        }
    }


}