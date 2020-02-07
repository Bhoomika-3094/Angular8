import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  getvalue: string ='';
  Message:string ='';
   memberlist1 : string[] =['bhoomika','milan'];
  editvale: string;
  // isShown: boolean = false ;
  getnumber: number;

  constructor() { }

  ngOnInit() {
  }

   
  addMember(){
    let value = this.getvalue;
    this.memberlist1.push(value);
    //this.isShown= ! this.isShown ;// this.isShown= true ;
    this.Message="Congratulation Record added";
  }
  updatemember() : void {
    let changedvalue = this.getvalue;
    this.memberlist1[this.getnumber]= changedvalue;
 }
  edit(ine:number){
    this.getnumber = ine;
    this.editvale = this.memberlist1[ine];
    this.getvalue = this.editvale;
  }

  delete(idx: number){
    alert("Are you sure you wanted Delete record?")
    this.memberlist1.splice(idx,1);
    this.Message="Record Deleted";
  }
 }
