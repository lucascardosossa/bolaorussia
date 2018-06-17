import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { JogosPage } from "../jogos/jogos";
import { ApostasPage } from '../apostas/apostas';
import { ClassificacaoPage } from '../classificacao/classificacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public jogosTab: any;
  public apostasTab: any;
  public classificacaoTab: any;

  constructor(public navCtrl: NavController) {
    this.jogosTab = JogosPage;
    this.apostasTab = ApostasPage;
    this.classificacaoTab = ClassificacaoPage;

  }

}
