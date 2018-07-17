import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authState: any = null;

  constructor(private auth: AngularFireAuth) {
  }

  subscribeAuth(): Observable<any> {
    return new Observable(observer => this.auth.authState.subscribe(auth => observer.next(auth)));
  }
}
