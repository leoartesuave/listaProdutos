import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servico/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  
  nameButton = 'enviar';
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  form!: FormGroup;
  routerId = null;
  produto = {};

  constructor(private firebaseService:FirebaseService, 
    private formBuilder:FormBuilder,
    private activatedRouter: ActivatedRoute
    ) { }
  
  ngOnInit() {

    this.validaForm('');
    this.routerId = this.activatedRouter.snapshot.params['id'];
    if(this.routerId){
     this.firebaseService.consultaUnica(this.routerId).subscribe(result => this.validaForm(result));
    }

  
  }

  validaForm(dados: any){
    
    this.form = this.formBuilder.group({
      item: [dados.item, [Validators.required, Validators.minLength(3)]],
      quant: [dados.quant, [Validators.required, Validators.maxLength(10)]]
    }) 
  }
 
  updateButton(){
    
    this.firebaseService.editar(this.form.value, this.routerId);
    setTimeout(this.refresh, 2000);
    
  }


  refresh(){
    location.reload();
  }


}
