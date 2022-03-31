import { Component, OnInit } from '@angular/core';
import { textList } from '@test/news-data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  textList = textList

  constructor() { }

  ngOnInit(): void {
  }

}
