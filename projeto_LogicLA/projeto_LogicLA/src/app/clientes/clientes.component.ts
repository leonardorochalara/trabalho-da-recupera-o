import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cadastro } from '../model/casdatro.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

 texto = "Usuários";
   /* pessoas = "{{i.nome}} {{i.idade}}"

  usuario = {
    nome: "Mario Abreu",
    idade: 56
  };


  usuarioCaixa = [

    {id: 1, nome: 'Mario', idade: 18},
    {id: 2, nome: 'Pedro', idade: 22},
    {id: 3, nome: 'Márcia', idade: 62}
 ]; */

 meusDados:cadastro[]=[];

 constructor(private http:HttpClient){

 }
 
 ngOnInit(): void {
    this.http.get<cadastro[]>('http://localhost:3000/dados').subscribe(result => this.meusDados = result);
  }

  /* Método excluir */
  excluir(id: number){
    this.http.delete('http://localhost:3000/dados/' + id).subscribe();
    alert("Item excluido com sucesso");
    setTimeout(this.refres, 2000);
  }

  refres(){
    location.reload();
  }
;




 

}
