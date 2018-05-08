import {Injectable, Inject} from '@angular/core';
import { of } from 'rxjs/observable/of';
import {catchError, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {IDiagnose} from './diagnose.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DiagnoseService {

    http: HttpClient;
    baseUrl: string;
    constructor(http: HttpClient)  {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/diagnoses/';
    }


    findDiagnoses(): Observable<IDiagnose[]> {
      console.log('findDiagnoses');
      // ...using get request
      return this.http.get(this.baseUrl)
        .map(data => {return data['content']})
          // .pipe(catchError((error: any) => Observable.throw(error)));
          // ...and calling .json() on the response to return data
          // .map((res: Response) => <any[]>res.json())
          // ...errors if any
       //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    createDiagnose(newDiagnose: IDiagnose): Observable<IDiagnose> {
        return this.http
          .post<IDiagnose>(this.baseUrl, newDiagnose)
          .pipe(catchError((error: any) => Observable.throw(error)));
      }

    deleteDiagnose(deleteDiagnose: IDiagnose): Observable<IDiagnose> {
        return this.http.delete<IDiagnose>(this.baseUrl + deleteDiagnose.id)
          .pipe(
            switchMap(() => of(deleteDiagnose))
          );
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
