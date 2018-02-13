import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
// import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@Component({
  templateUrl: 'tabs.html'
})
// @IonicPage(
//   {
//     name :'tabsPage'
//   }

// )
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }

}
