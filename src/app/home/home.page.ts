import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cmdResults: any;

  constructor(private http: HttpClient) { }

  getCmd(command: string) {
    this.cmdResults = [];
    // let url = 'https://pokeapi.co/api/v2/pokemon/';
    let url = 'http://178.79.135.71:8080/' + command;
    this.runCmd(url);
  }

  runCmd(url: string) {
    try {
      this.http.get<any>(url)
        .subscribe(response => {
          let results = response.stdout.split('\n');
          this.cmdResults = results;
        });
    } catch (e) {
      this.cmdResults = [e];
    }
  }

}
