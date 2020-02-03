import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {

  namearray= [{
    Name:"bhoomika",
    Age:25
  },
  {
    Name: "Milan",
    Age:29
  }]
  constructor() { }

  ngOnInit() {
  }

}
