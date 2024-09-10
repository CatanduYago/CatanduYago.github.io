import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com/user/repos';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `token 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`
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
