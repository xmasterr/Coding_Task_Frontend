import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnalyzerService} from "../analyzer.service";


@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})

export class VowelsComponent{

  title = 'AngularCodingTask';
  text = '';
  checked = true;
  resultMaP = {};


  //Dependency(HTTPClient, analyzerService) Injection

  constructor( private http: HttpClient,
               private analyzerService: AnalyzerService) {}

  analyzer() {
    //online
    if (this.checked){

      this.http.get<any>('http://localhost:8080/api/analyzer?text='+this.text).subscribe(
        //callback function
        data =>  this.resultMaP = data);

      //offline
    }else {
      let result = this.analyzerService.analyze(this.text);
      this.resultMaP = result;
    }

  }

}
