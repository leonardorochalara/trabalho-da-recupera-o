import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent  {

  control = true;
  texto = "Login";
  
  nameButton = "Cadastro";
  nameButton2="enviar";
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  
  constructor(private http:HttpClient){

  }
  
  cadastro(form:any){
    console.log(form)
    this.http.post('http://localhost:3000/dados', form.value, this.httpOptions).subscribe();
    /* setTimeout(this.refresh, 2000); */
  }


  login(){
   this.control ? this.nameButton = "Login" : this.nameButton = "Cadastro";
   this.control ? this.texto = "Cadastro" : this.texto = "Login";

    return this.control = !this.control;
    
    
  }

  refresh(){
    location.reload();
  }
  
}
