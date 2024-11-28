import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';
@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  data: any[]=[];
  constructor(private apiService: ListaService){}
  ngOnInit():void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data=data;
      console.log(this.data)
    })
  }
}
