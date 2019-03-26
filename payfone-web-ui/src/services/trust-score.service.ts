import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class TrustScoreService {

    private uri = '/payfone/api/trust-score';

    constructor( private http: HttpClient ) { }

    getTrustScore( phoneNumber: string ): Observable<any> {
        // The proxy.conf.json file redirects this call to the Spring service on the localhost

        console.log( "Getting trust score for phone number: " + phoneNumber );

        let params = new HttpParams().set( "phoneNumber", phoneNumber );

        return this.http.get( this.uri, { params: params } )
            .pipe( map( response => {
                console.log( response );
                return response;
            } ) );
    }
}
