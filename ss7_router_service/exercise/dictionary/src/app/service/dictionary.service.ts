import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  wordList = new Array();

  constructor() {
    this.wordList.push({
      word: 'Apple',
      mean: 'quả táo'
    });
    this.wordList.push({
      word: 'Water melon',
      mean: 'quả dưa hấu'
    });
    this.wordList.push({
      word: 'Orange',
      mean: 'quả cam'
    });
    this.wordList.push({
      word: 'Banana',
      mean: 'quả chuối'
    });
  }

  findByWord(name: string): IWord {
    return this.wordList.find(nameId => nameId.word === name);
  }

  findAll(): IWord[] {
    return this.wordList;
  }
}
