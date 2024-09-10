import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos: any[] = [];

  private apiUrl = 'https://api.github.com/user/repos';
  private token = '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';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.http.get<any[]>(this.apiUrl, {
      headers: {
        'Authorization': `token ${this.token}`
      }
    }).subscribe(repos => {
      this.repos = repos;
    });
  }
}
