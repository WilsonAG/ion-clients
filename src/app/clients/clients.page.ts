import { Client } from './../interfaces/client';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  public clients: Client[] = [
    {
      name: 'ANDRADE BAMONDE PATRICIO ALEXANDER',
      phone: '2346910',
      cel: '0987781647',
      email: 'patriciocheo@hotmail.com',
      address: '',
    },
    {
      name: 'ARIAS ARIAS LEANDRO JAVIER',
      phone: '2628161',
      cel: '0992945652',
      email: 'leo-conan@hotmail.com',
      address: '',
    },
    {
      name: 'BASANTES PANCHI LUIS MARCELO',
      phone: '2694676',
      cel: '0999278702',
      email: 'marcelo17_@hotmail.es',
      address: '',
    },
    {
      name: 'BRIONES LAICA RICHARD FABRICIO',
      phone: '022604472',
      cel: '(09) 98448946',
      email: 'elfabo.10@gmail.com',
      address: '',
    },
    {
      name: 'CAIZA TAPIA LUIS MIGUEL',
      phone: '2316403',
      cel: '0989062492',
      email: 'luis_caiza1234@hotmail.com',
      address: '',
    },
    {
      name: 'CELI VIVANCO WALTER PATRICIO',
      phone: '2683484',
      cel: '0992024158',
      email: '`patogrim_45@hotmail.com',
      address: '',
    },
    {
      name: 'CHÁVEZ GARCIA CARLOS ALBERTO',
      phone: '022694855',
      cel: '0996337111',
      email: 'charlyg003@hotmail.com',
      address: '',
    },
    {
      name: 'COBO VALLE FRANCISCO JAVIER',
      phone: '022532635',
      cel: '0990317476',
      email: 'javi_cobo96@hotmail.com',
      address: '',
    },
    {
      name: 'DIAZ RAZO RICARDO MIGUEL',
      phone: '42564785',
      cel: '(09)4845666',
      email: 'ricardo2035@hotmail.com',
      address: '',
    },
    {
      name: 'ERAS LALANGUI KARINA ELIZABETH',
      phone: '022676563',
      cel: '(09) 87890212',
      email: 'karinita.2505@hotmail.com',
      address: '',
    },
    {
      name: 'FAJARDO ESCOBAR GIOVANNY MAURICIO',
      phone: '3014335',
      cel: '0980126187',
      email: 'niac07geo@hotmail.com',
      address: '',
    },
    {
      name: 'GUANOLEMA YAUTIBUG DIEGO ISAAC',
      phone: '2281691',
      cel: '(09)4564122',
      email: 'pantera_ngn@hotmail.com',
      address: '',
    },
    {
      name: 'HIDALGO ANCHALIQUIN WILMAN STEVEN',
      phone: '3072495',
      cel: '0983945870',
      email: 'washo_cr29@hotmail.com',
      address: '',
    },
    {
      name: 'LOAIZA HUANCAS JUAN GABRIEL',
      phone: '023100129',
      cel: '0987932541',
      email: 'gabrieloaiza@gmail.com',
      address: '',
    },
    {
      name: 'MALDONADO ATIENCIA EDWIN WLADIMIR',
      phone: '022331938',
      cel: '0994191871',
      email: 'edwinwla13@hotmail.com',
      address: '',
    },
    {
      name: 'MÁRQUEZ ENRIQUEZ CARLOS ANIBAL',
      phone: '3035160',
      cel: '(09) 94370220',
      email: 'carlosmr961@gmail.com',
      address: '',
    },
    {
      name: 'PACHECO COYAGUILLO ENMA MARCELA',
      phone: '5147520',
      cel: '(09) 84833058',
      email: 'marcemap22@hotmail.com',
      address: '',
    },
    {
      name: 'PANEZO GUERRERO  BORYS ALEXY',
      phone: '0959581163',
      cel: '(09) 59581163',
      email: '65geminis@hotmail.es',
      address: '',
    },
    {
      name: 'PEREZ SALAS LUZ PATRICIA',
      phone: '095981950',
      cel: '0984075154',
      email: 'miflakitalinda93@yahoo.es',
      address: '',
    },
    {
      name: 'PRUNA AYALA HENRY GEOVANY',
      phone: '022963617',
      cel: '0998951101',
      email: 'hpelcien_2987@hotmail.com',
      address: '',
    },
    {
      name: 'QUIROZ ORTIZ  BRAYAN PATRICIO',
      phone: '022393894',
      cel: '(09) 84264705',
      email: 'brayanpato97@outlook.es',
      address: '',
    },
    {
      name: 'RENDON HERNANDEZ DIANA CAROLINA',
      phone: '087980824',
      cel: '0987980824',
      email: 'teyhy1@gmail.com',
      address: '',
    },
    {
      name: 'SACANCELA CHICHARRON LUIS FERNANDO',
      phone: '3806884',
      cel: '0984508457',
      email: 'luizfer94@hotmail.com',
      address: '',
    },
    {
      name: 'SUAREZ IZA KEVIN DAVID',
      phone: '3160324',
      cel: '(09) 84527086',
      email: 'ksuarezi@est.ups.edu.ec',
      address: '',
    },
    {
      name: 'TELLO AYALA XAVIER ANDRES',
      phone: '2323393',
      cel: '0987976302',
      email: 'javier_1133@hotmail.es',
      address: '',
    },
    {
      name: 'ALDAZ GARCIA EDUARDO DAVID',
      phone: '2674423',
      cel: '0984038130',
      email: 'edual1584@hotmail.com',
      address: '',
    },
    {
      name: 'ASITIMBAY MORALES ROMMEL DAVID',
      phone: '2520045',
      cel: '0984571859',
      email: 'rum_dav@hotmail.com',
      address: '',
    },
    {
      name: 'GUANOCHANGA GUZMAN ANA LUCIA',
      phone: '2731191',
      cel: '0987484714',
      email: 'anyluzg@hotmail.com',
      address: '',
    },
    {
      name: 'LEON MUÑOZ ANDRES FELIPE',
      phone: '2664715',
      cel: '0998649501',
      email: 'andrew8679@hotmail.com',
      address: '',
    },
    {
      name: 'ACONDA ANALUIZA CARLOS RUBEN',
      phone: '3380020',
      cel: '(09) 68710942',
      email: 'deathsslider@hotmail.es',
      address: '',
    },
    {
      name: 'MARTÍNEZ SAN ANDRÉS GISELA FERNANDA',
      phone: '2235781',
      cel: '(09) 98355944',
      email: 'gmartine17@yahoo.com',
      address: '',
    },
    {
      name: 'MOLINA VEINTIMILLA JUAN RODOLFO',
      phone: '3120494',
      cel: '0992509843',
      email: 'rodol_molin@hotmail.com',
      address: '',
    },
    {
      name: 'TAIPE MORALES SANTIAGO JOSE',
      phone: '022954143',
      cel: '(09) 98901867',
      email: 'santiago.taipe@gmail.com',
      address: '',
    },
    {
      name: 'VASQUEZ CLAVIJO JENNY ELIZABETH',
      phone: '682174',
      cel: '0984592291',
      email: 'jeneli_flak@yahoo.es',
      address: '',
    },
    {
      name: 'ACHIG GUACHAMIN KAREN VANESSA',
      phone: '264900',
      cel: '0985516677',
      email: 'karenchis14@hotmail.com',
      address: '',
    },
    {
      name: 'BRIONEZ PINZON MIGUEL CRISTÓBAL',
      phone: '3072850',
      cel: '(09) 80468139',
      email: 'miguel_brionez@hotmail.com',
      address: '',
    },
    {
      name: 'SANANGO JIMENEZ CARLA MIREYA',
      phone: '022606462',
      cel: '0998723543',
      email: 'carlasanango@gmail.com',
      address: '',
    },
    {
      name: 'VILLAMARÍN ACUÑA JACQUELINE ESTEFANIA',
      phone: '3041426',
      cel: '(09) 99293315',
      email: 'estefania.villamarin.ev@gmail.com',
      address: '',
    },
    {
      name: 'DANIEL GABRIEL ANTITA TULPEZ',
      phone: '2564584',
      cel: '(09) 97458744',
      email: 'danielantita@gmail.com',
      address: '',
    },
    {
      name: 'BRYANNA AYLIN ORTIZ CISNEROS',
      phone: '3519227',
      cel: '(09) 94499285',
      email: 'brylin@yahoo.com',
      address: '',
    },
  ];

  public data: Client[] = [];
  public page = 1;
  public searchStr: string = '';

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private ac: AlertController) {}

  ngOnInit() {
    this.data = this.clients.slice(0, 15);
    this.page++;
  }

  async showClient(client: Client) {
    const alert = await this.ac.create({
      header: 'Cliente',
      subHeader: client.name,
      message: `El cliente tiene el telefono: ${client.phone}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  search() {
    console.log(this.searchStr);
    this.data = this.clients.filter((el) => {
      if (el.name.includes(this.searchStr.toUpperCase())) {
        return el;
      }
    });
  }

  loadData(event) {
    if (this.data.length == this.clients.length) {
      event.target.disabled = true;
    }
  }

  getPageData(page: number) {}

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
}
