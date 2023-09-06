import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.model';
import { DatabaseService } from '../servico/database.service';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  /* Atributos para cima */
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  
  /* Array do ngFor */
  /* Produtos é o meu molde */
  minhaLista:any[] = [];

  /* Métodos para baixo */
  constructor(
    private firebaseService: FirebaseService,
    /* Nosso serviço de banco de dados HTTPCLIENT */
    /* private bancoDados: DatabaseService, */
    
    /* Vou fazer um carregando */
    private loadinControl: LoadingController
    
    ) {}

  ngOnInit(): void {
    /* Inicia o carregando */
    this.carregando();
    this.firebaseService.consulta().subscribe(result => this.minhaLista =result);

   /* Consulta os dados na WebAPI */
   /* this.bancoDados.consulta().subscribe(caixa => this.minhaLista = caixa); */
  }

  apagar(id:any){
    this.firebaseService.excluir(id);
  }

  /* Método do carregando(Loading) */
  async carregando(){
    const load = this.loadinControl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 2000
    });
    (await load).present();
  }


}
