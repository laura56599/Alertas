import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers, HttpModule, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class SensoresService {

    data: object;
private headers = new Headers({'content-type': 'application/json', 'charset': 'UFT-8'});


constructor (private http: HttpClient) {

}


getData() {
      this.http.get('/api/alertas').subscribe(
        res => this.data = res,
        err => console.error(err),
        () => console.log('it works!')
        );
}

 getlistsensores() {
     return this.http.get('/rest/sensores/listsensores');
}

 getlistarAlertas() {
    return this.http.get('/rest/sensores/listalertas');
}


}
