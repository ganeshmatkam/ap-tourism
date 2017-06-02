import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ListPage } from '../../pages/list/list';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  homePage: Component;
  listPage: Component;
  selectedIndex = 1;

  pages = ['HomePage', 'ListPage']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    this.listPage = ListPage;

    if(navParams.get('page')){
      this.selectedIndex  = this.pages.indexOf(navParams.get('page'));
    }


  }

}
