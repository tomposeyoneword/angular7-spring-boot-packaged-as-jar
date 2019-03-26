import { Component, OnInit } from '@angular/core';

import { HelloService } from '../../services/hello.service';

@Component( {
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.less']
} )
export class HelloComponent implements OnInit {

    private response: string;

    constructor( private helloService: HelloService ) { }

    ngOnInit() {
        this.getResponse();
    }

    getResponse() {
        this.helloService.hello()
            .subscribe(
            data => {
                console.log( 'hello result: ' + data );
                this.response = data;
            },
            error => {
                this.response = "Hello.  The service provider is probably not running, so you are seeing this mock response."
            } );
    }
}
