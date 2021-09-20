import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  constructor() { }

  isVowel(letter: string) {
    return ("aeiouAEIOU".indexOf(letter) != -1);
  }

  isConsonant(letter: string) {
    return !this.isVowel(letter);
  }

  analyze(text: string) {
    let request = text.split(' ');
    const mode = request[0];
    const letters = request[1];
    const map = new Map<string, number>();

    for (let i = 0; i < letters.length; i++) {

      let letter = letters[i].toLocaleLowerCase();

      if (mode == 'consonants' && this.isConsonant(letter)) {
        if(map.has(letter)){
          let value = map.get(letter) as number;
          map.set(letter, value+1);
        }else {
          map.set(letter, 1);
        }
      }

      if (mode == 'vowels' && this.isVowel(letter)) { //
        if(map.has(letter)){
          let value = map.get(letter) as number;
          map.set(letter, value+1);
        }else {
          map.set(letter, 1);
        }
      }
    }
    return map;
  }

}
