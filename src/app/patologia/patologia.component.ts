import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
  styleUrls: ['./patologia.component.css']
})
export class PatologiaComponent implements OnInit {
  
  @Input() sintoma1: string;
  @Input() sintoma2: string;
  @Output() diagnostico = new EventEmitter<string>();

  patologia: string;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.sintoma1,this.sintoma2);
    this.elegirSintoma();
  }

  elegirSintoma(){
    
     if (this.sintoma1 =='fiebre' && this.sintoma2=='tos'){
         this.patologia = 'coronavirus';
     }
     else{
      if (this.sintoma1 =='dolor estomacal' && this.sintoma2=='acidez estomacal'){
        this.patologia = 'gastritis';
    }
    else {
      
        this.patologia = 'Sin diagnostico';
    
    }
     }
     this.diagnostico.emit(this.patologia);
     }

}

