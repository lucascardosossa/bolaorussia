import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from "../profile/profile";
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
  public profileTab: any;

  constructor(public navCtrl: NavController) {
    this.jogosTab = JogosPage;
    this.apostasTab = ApostasPage;
    this.classificacaoTab = ClassificacaoPage;
    this.profileTab = ProfilePage;

  }

}
