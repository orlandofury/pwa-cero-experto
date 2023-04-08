import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: PaisInterface;

  constructor(
    public paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.paisesService.getPaisPorId( id ).then( pais => {

      if ( !pais ) {
        return this.router.navigateByUrl('/');
      }

      this.pais = pais;
      console.log( pais );

    });

  }

}
