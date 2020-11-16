import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController,
    private storage: Storage,
    private router:Router,) {}

  async volkslists() {
    this.storage.set('mark','volkswagen');

   /* this.storage.get('mark').then((val) => {
      console.log('mark is ', val);
    });*/
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Volkswagen Cars List',
      buttons: [{
        text: 'AMAROK (2H)',
        
        handler: () => {
          this.storage.set('model','amarok_2h');
         
          this.optionsAmarok_2h();
        }
      }, {
        text: 'CADDY (2K)',
        
        handler: () => {
          this.storage.set('model','caddy_2k');
          this.optionsCaddy_2k();
        }
      }, {
        text: 'FOX (5Z)',
        
        handler: () => {
          this.storage.set('model','fox_5z');
          this.optionsFox_5z();
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          this.storage.set('model','golf4_1j');
          this.optionsGolf4_1j();
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          this.storage.set('model','golf5_1k');
          this.optionsGolf5_1k();
        }
      }, {
        text: 'GOLF 6 (5K)',
        
        handler: () => {
          this.storage.set('model','golf6_5k');
          this.optionsGolf6_5k();
          
          
        }
      }, {
        text: 'GOLF 7 (5G)',
        
        handler: () => {
          this.storage.set('model','golf7_5g');
          this.optionsGolf7_5g();
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          this.storage.set('model','passat_3c');
          this.optionsPassat_3c();
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          this.storage.set('model','passat_3b');
          this.optionsPassat_3b();
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          this.storage.set('model','passat_3g');
          this.optionsPassat_3g();
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          this.storage.set('model','polo3_6n');
          this.optionsPolo3_6n();
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          this.storage.set('model','polo4_9n');
          this.optionsPolo4_9n();
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          this.storage.set('model','polo5_6r');
          this.optionsPolo5_6r();
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          this.storage.set('model','tiguan_5n');
          this.optionsTiguan_5n();
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          this.storage.set('model','touareg_7l');
          this.optionsTouareg_7l();
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          this.storage.set('model','touareg_7p');
          this.optionsTouareg_7p();
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          this.storage.set('model','touareg_1t1');
          this.optionsTouareg_1t1();
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          this.storage.set('model','touareg_1t2');
          this.optionsTouareg_1t2();
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          this.storage.set('model','touareg_1t3');
          this.optionsTouareg_1t3();
        }
      }, {
        text: 'TOURAN (2T)',
        
        handler: () => {
          this.storage.set('model','touran_2t');
          this.optionsTouran_2t();
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async audilists() {
    this.storage.set('mark','audi')
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Audi Cars List',
      buttons: [{
        text: 'A1 (8X)',
        
        handler: () => {
          this.optionsA1_8x();
        }
      }, {
        text: 'A3 (8L)',
        
        handler: () => {
          this.optionsA3_8l();
        }
      }, {
        text: 'A3 (8P)',
        
        handler: () => {
          this.optionsA3_8p();
        }
      }, {
        text: 'A3 (8V)',
        
        handler: () => {
          this.optionsA3_8v();
        }
      }, {
        text: 'A4 (B5)',
        
        handler: () => {
          this.optionsA4_b5();
        }
      }, {
        text: 'A4 (B6)',
        
        handler: () => {
          this.optionsA4_b6();
        }
      }, {
        text: 'A4 (B7)',
        
        handler: () => {
          this.optionsA4_b7();
        }
      }, {
        text: 'A4 (B8)',
        
        handler: () => {
          this.optionsA4_b8();
        }
      }, {
        text: 'A5 (8T)',
        
        handler: () => {
          this.optionsA5_8t();
        }
      }, {
        text: 'A6 (6F)',
        
        handler: () => {
          this.optionsA6_6f();
        }
      }, {
        text: 'A6 (4G)',
        
        handler: () => {
          this.optionsA6_4g();
        }
      }, {
        text: 'A8 (4E)',
        
        handler: () => {
          this.optionsA8_4e();
        }
      }, {
        text: 'A8 (4H)',
        
        handler: () => {
          this.optionsA8_4h();
        }
      }, {
        text: 'Q3 (8U)',
        
        handler: () => {
          this.optionsQ3_8u();
        }
      }, {
        text: 'Q5 (4L)',
        
        handler: () => {
          this.optionsQ5_4l();
        }
      }, {
        text: 'Q7 (7M)',
        
        handler: () => {
          this.optionsQ7_7m();
        }
      }, {
        text: 'TT (8N)',
        
        handler: () => {
          this.optionsTt_8n();
        }
      }, {
        text: 'TT (8J)',
        
        handler: () => {
          this.optionsTt_8j();
        }
      }, {
        text: 'TT (8S)',
        
        handler: () => {
          this.optionsTt_8s();
        }
      }, {
        text: 'R8 (42)',
        
        handler: () => {
          this.optionsR8_42();
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async skodalists() {
    this.storage.set('mark','skoda')
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Skoda Cars List',
      buttons: [{
        text: 'CITIGO (AA)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'FABIA (6Y)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FABIA (5J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FABIA (NJ)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'OCTAVIA (1U)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'OCTAVIA 2 (1Z)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'OCTAVIA 3 (5E)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'RAPID (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ROOMSTER (5J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'SUPERB (3U)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'SUPERB (3T)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'SUPERB (3V)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'YETI (5L)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async seatlists() {
    this.storage.set('mark','seat')
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Seat Cars List',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

//lists of options for each model of skoda

//lists of options for each model of skoda


//lists of options for each model of audi

 async optionsA1_8x(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A1 8x',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA3_8l(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A3 8l',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA3_8p(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A3 8p',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA3_8v(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A3 8v',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA4_b5(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A4 b5',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA4_b6(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A4 b6',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA4_b7(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A4 b7',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA4_b8(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A4 b8',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA5_8t(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A5 8t',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA6_6f(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A6 6f',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA6_4g(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A6 4g',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA8_4e(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A8 4e',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsA8_4h(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for A8 4h',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsQ3_8u(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Q3 8u',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsQ5_4l(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Q5 4l',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsQ7_7m(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Q7 7m',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTt_8n(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Tt 8n',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTt_8j(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Tt 8j',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTt_8s(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Tt 8s',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsR8_42(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for R8 42',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  //lists of options for each model of volkswagen
  async optionsAmarok_2h(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Amarok 2H',
      buttons: [{
        text: 'Coming/Leaving Home avec Xénon',
        
        handler: () => {
          this.storage.set('option','amarok-2h-op1');
          this.storage.set('texttoolbar','Coming/Leaving Home avec Xénon');
          this.router.navigate(['/option']);
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsCaddy_2k(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Caddy 2K',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsFox_5z(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Fox 5Z',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsGolf4_1j(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Golf4 1J',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsGolf5_1k(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for GOlf5 1K',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsGolf6_5k(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Golf6 5K',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsGolf7_5g(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Golf7 5G',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPassat_3c(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for  Passat 3C',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPassat_3b(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Passat 3B',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPassat_3g(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Passat 3G',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPolo3_6n(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Polo3 6N',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPolo4_9n(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Polo4 9N',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsPolo5_6r(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Polo5 6R',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTiguan_5n(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Tiguan 5N',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouareg_7l(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touareg 7L',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouareg_7p(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touareg 7P',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouareg_1t1(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touareg 1T1',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouareg_1t2(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touareg 1T2',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouareg_1t3(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touareg 1T3',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async optionsTouran_2t(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Touran 2T',
      buttons: [{
        text: 'ALHAMBRA (71)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'ALTEA (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ATECA (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'EXEO (3R)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'IBIZA (6L)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'IBIZA (6J)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'IBIZA (6P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (1P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'LEON (5F)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'MII (AA)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (5P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOLEDO (NH)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
