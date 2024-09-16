import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { NivelEducacional } from 'src/app/model/nivel-educacional';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario: Usuario;
  public respuesta: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.usuario = new Usuario('','','','','','','',
      NivelEducacional.findNivelEducacionalById(1)!, undefined);
    this.activatedRoute.queryParams.subscribe(params =>{
      const nav = this.router.getCurrentNavigation();
      if (nav){
        if(nav.extras.state){
          this.usuario = nav.extras.state['usuario'];
          return;
        }
      }
      this.router.navigate(['/login'])
    });
  }
    

  ngOnInit() {
  }

  public validarRespuestaSecreta(): void{
    if (this.usuario.respuestaSecreta === this.respuesta){
      this.router.navigate(['/correcto']);
    } else{
      this.router.navigate(['/incorrecto']);
    }
  }
}
