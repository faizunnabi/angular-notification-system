import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  constructor() { }
  private messages = [];
  private subject = new Subject<any>();

  setMessage(message: string) {
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
