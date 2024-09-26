import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { valores, valoresPost } from './Model/respostaModel';

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent {
  //criar um contrutor para chamar o serviço
  //ServerService é o serviço externo - link do Reqres
  constructor(public servico:ServerService){
  }

  val:valores[]=[]; //criar zerado
  client : valoresPost={} as valoresPost;
  clientResult : valoresPost={} as valoresPost;
  vItemNome: string = "";
  vItemJob: string = "";

  code: string = "";
  vItemcode: string = "";
  clientResultNome: string ="";

  chamadaBack(){

    this.val=[];
    this.clientResult={}as valoresPost;
    //serviço chama o ServerService e assina o serviço e ja espera a resposta 
    this.servico.getTodosUsuarios().subscribe((resposta : any)=>
    {
      console.log(resposta.data);
      //this.val = JSON.parse(resposta.data);
      this.val = (resposta.data);
      console.log(this.val);      
      
    })
    
  }


  chamadaBackPost(){
    this.code = this.vItemcode;
    this.servico.postUsuario(this.code).subscribe((resp : any)=>
    {  
      alert("Cadastro ok - "+resp);
      this.clientResultNome = resp;
      console.log(resp);
    },
    (error : any)=>{
      alert("error: "+error);
    }   
    )   
  }

}


