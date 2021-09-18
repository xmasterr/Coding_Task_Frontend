import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HttpClient} from '@angular/common/http';


declare var myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularCodingTask';
  text = '';
  checked = true;
  resultMaP = {};

  constructor( private http: HttpClient) {}

  analyzer() {
    //online
    if (this.checked){
    this.http.get<any>('/api/analyzer?text='+this.text).subscribe(data => this.resultMaP = data);

    //offline
    }else {
      //TODO:CALL SCRIPT
 //     textAnalyzerScript.analyse();
myTest();
    }

  }
}
