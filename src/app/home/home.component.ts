import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text!:string;
  startTime!:Date;
  endTime!:Date;
  counterSec:number = 0;
  counterMin:number = 0;
  counterHours:number = 0;
  secvar:any;
  minvar:any;
  hourvar:any;
  list:any[] = [];
  modal:boolean = false;
  showStart:boolean = true;
  projTitle!:string;
  selectedItem!:any;
  constructor() { }

  ngOnInit(): void {
  }

  startTimer(){
    this.showStart = false;
   this.secvar =  setInterval(()=>{
      this.counterSec++;
      if(this.counterSec == 60){
      this.updateMin();
      this.counterSec = 0;
      }
    },1000);

  }

  updateMin(){
    this.counterMin++;
    this.minvar  = setInterval(()=>{
      
      if(this.counterMin == 60){
      this.updateHours();
      this.counterMin = 0;
      }
    },(1000*60));
  }

  updateHours(){
    this.counterHours++;
    this.hourvar = setInterval(()=>{
      this.counterHours++;
    },(1000*60*60));
  }



  stopTimer(){
    this.showStart=true;
   clearInterval(this.secvar);
   clearInterval(this.minvar);
   clearInterval(this.hourvar);
   
    this.addToList();
  }
  
  addToList(){
    console.log("insode add");
    const obj = {
      title:this.text,
      duration: this.counterHours + ":" + this.counterMin + ":" + this.counterSec
    };
    console.log(obj);
    this.list.push(obj);
    this.counterHours = 0;
   this.counterMin= 0;
   this.counterSec = 0;
  }

  delete(item:any){
    this.list = this.list.filter(li => li != item);
  }

  addProj(item:any){
    this.selectedItem = item;
    this.modal = true;
  }

  add(){
    var obj = this.list.find(li => li.title == this.selectedItem.title);
    
    this.list = this.list.filter(li => li!=obj);
    obj['proj'] = [];
    obj['proj'].push({title:this.projTitle});
    this.list = [...this.list,obj];
    console.log(this.list);
    this.modal = false;
  }

  

}
