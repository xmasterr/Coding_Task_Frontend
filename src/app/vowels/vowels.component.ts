import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnalyzerService} from "../analyzer.service";


@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {

  title = 'AngularCodingTask';
  text = '';
  checked = true;
  resultMaP = {};


  //Dependency Injection
  constructor( private http: HttpClient,
               private analyzerService: AnalyzerService) {}

  analyzer() {
    //online or offline
    if (this.checked){

      this.http.get<any>('http://localhost:8080/api/analyzer?text='+this.text).subscribe(
        data =>
          this.resultMaP = data);

    }else {
      let result = this.analyzerService.analyze(this.text);
      this.resultMaP = result;
    }

  }

  ngOnInit(): void {
  }

}
