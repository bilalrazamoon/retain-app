import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {
    headers:Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    api_url = "http://localhost:3500";

    constructor(private http:Http) {
    }

    private getJson(response:Response) {
        return response.json();
    }

    private checkForError(response:Response):Response {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }

    get(path:string):Observable<any> {
        let url = String(this.api_url + path);
        return this.http.get(url, {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }

    post(path:string, body:any):Observable<any> {
        let url = String(this.api_url + path);
        return this.http.post(url, JSON.stringify(body), {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }

    delete(path:string):Observable<any> {
        let url = String(this.api_url + path);
        return this.http.delete(url, {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }
}