import { Injectable } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Term } from './term';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AutocService {
  private symbolApi = 'http://angular-express-env.quiexmfkcc.us-west-2.elasticbeanstalk.com/guessSymbolApi';  // URL to web api - remember to remove when complete
  results: any[];
  constructor(private http: HttpClient){}
  search(term: string): Promise<Term[]> {
    const params = new HttpParams()
      .set('input', term);
    return this.http.get<any[]>(this.symbolApi, {params})
        .toPromise()
        .then(data => data as Term[])
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
