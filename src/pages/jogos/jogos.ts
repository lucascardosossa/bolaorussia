import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html'
})
export class JogosPage {
  public apostas: AngularFireList<any>;
  public user: string = '';
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {
      this.apostas = db.list("/apostas");
      afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user.email
        }
      });
      this.form = fb.group({
        br1:"",
        sw:"",
        br2: "",
        cr: "",
        br3: "",
        srv: ""
      })
  }

  salvar(){
      this.apostas.remove();
      this.apostas.push({
        date: firebase.database.ServerValue.TIMESTAMP,
        user: this.user,
        aposta1:{
          brasil: this.form.controls["br1"].value,
          adversario: this.form.controls["sw"].value
        },
        aposta2:{
          brasil: this.form.controls["br2"].value,
          adversario: this.form.controls["cr"].value,
        },
        aposta3:{
          brasil: this.form.controls["br3"].value,
          adversario: this.form.controls["srv"].value,
        }
      });
  }

}
