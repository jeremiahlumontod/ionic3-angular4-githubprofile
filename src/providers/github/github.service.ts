import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';


@Injectable()
export class GithubService {
  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos';

  constructor() {
  }

  /*
    Finding the username from within USER_LIST equal to the username param 
    passed on. Will return the results as an Observable
  */
  mockGetUserInformation(username: string):Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  /*
    Findig the repositories from with REPOSITORY_LIST equal to the username 
    passed on. Returning the results of an array of Repository as Observable

  */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }
    

}
