import { Component, OnInit } from '@angular/core';
import { Name } from './name.model';
@Component({
  selector: 'app-modelexample',
  templateUrl: './modelexample.component.html',
  styleUrls: ['./modelexample.component.css']
})
export class ModelexampleComponent implements OnInit {
  searchname : string;
  getname: any;

  students : Name[] = [
    new Name(1,'shivam'),
    new Name(2,'madhu'),
    new Name(3,'pooja'),
    new Name(4,'lucky'),
  ];
  onClick(){
    this.getname = this.searchname;
    alert(this.getname);
    
    
  }
  constructor() { }

  ngOnInit() {
     // let student : Name = new Name([1,2,3,4,5],["shivam","madhu","pooja","lucky"]);
    // this.students.push(student);
  }

}
