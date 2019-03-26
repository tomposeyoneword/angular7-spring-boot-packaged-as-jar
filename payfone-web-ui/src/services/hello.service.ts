import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class HelloService {

    private uri = '/payfone/api/hello';

    constructor( private http: HttpClient ) { }

    hello(): Observable<string> {
        // The proxy.conf.json file redirects this call to the Spring service on the localhost
        return this.http.get( this.uri, { responseType: 'text' } )
            .pipe( map( response => {
                console.log( response );
                return response;
            } ) );
    }
}
