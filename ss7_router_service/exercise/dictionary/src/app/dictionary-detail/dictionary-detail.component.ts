import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  iWord: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const word = this.activatedRoute.snapshot.params.word;
    this.iWord = this.dictionaryService.findByWord(word);
  }

}
