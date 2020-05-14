import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  
primerSintoma: string="fiebre";
segundoSintoma: string="tos";
patologia: string ="";
arraySintomas: string[];
arraySintomas2 :string[];
  
    

  constructor() { 

    this.arraySintomas = ['fiebre','dolor estomacal'];
    this.arraySintomas2 = ['tos','acidez estomacal'];
  }

  ngOnInit(): void {
    
  }

  getDiagnostico(value) {
    this.patologia=value;
		console.log('diagnostico obtenido', this.patologia);
	}
}
