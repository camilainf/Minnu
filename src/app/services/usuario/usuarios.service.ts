import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserIn, UserRegister } from "./usuario.type";
import { UserMapper } from "./user.mapper";
import {Observable} from "rxjs";
import { Constant } from "src/environments/constants/constants";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private _user: UserIn | undefined;

    

    constructor(private httpClient : HttpClient, private userMapper: UserMapper) {}

    userRegister (user: UserRegister):Observable<any> {
        const body = this.userMapper.mapUserRegisterToDTO(user);
        const url = Constant.API_URL + '/users';
        const request = this.httpClient.post(url, body, {observe : 'response'});
        
        return request;
    }

    login(email: string, pass: string):Observable<any> {
        const body = this.userMapper.mapLoginToBody(email, pass);
        const url = Constant.API_URL + '/login';
        const request = this.httpClient.post(url, body, {observe: 'response'});
        return request;
    }

    set user(value: UserIn) {
        this._user = value;
    }

    getUser():UserIn | undefined {
        return this._user;
    }
}



