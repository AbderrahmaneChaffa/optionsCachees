import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController) {}

  async volkslists() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Volkswagen Cars List',
      buttons: [{
        text: 'AMAROK (2H)',
        
        handler: () => {
          this.optionsAmarok_2h();
        }
      }, {
        text: 'CADDY (2K)',
        
        handler: () => {
          this.optionsCaddy_2k();
        }
      }, {
        text: 'FOX (5Z)',
        
        handler: () => {
          this.optionsFox_5z();
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          this.optionsGolf4_1j();
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          this.optionsGolf5_1k();
        }
      }, {
        text: 'GOLF 6 (5K)',
        
        handler: () => {
          this.optionsGolf6_5k();
          
          
        }
      }, {
        text: 'GOLF 7 (5G)',
        
        handler: () => {
          this.optionsGolf7_5g();
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          this.optionsPassat_3c();
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          this.optionsPassat_3b();
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          this.optionsPassat_3g();
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          this.optionsPolo3_6n();
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          this.optionsPolo4_9n();
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          this.optionsPolo5_6r();
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          this.optionsTiguan_5n();
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          this.optionsTouareg_7l();
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          this.optionsTouareg_7p();
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          this.optionsTouareg_1t1();
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          this.optionsTouareg_1t2();
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          this.optionsTouareg_1t3();
        }
      }, {
        text: 'TOURAN (2T)',
        
        handler: () => {
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

  async optionsA3_8p(){
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

  async optionsA3_8v(){
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

  async optionsA4_b5(){
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

  async optionsA4_b6(){
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

  async optionsA4_b7(){
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

  async optionsA4_b8(){
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

  async optionsA5_8t(){
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

  async optionsA6_6f(){
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

  async optionsA6_4g(){
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

  async optionsA8_4e(){
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

  async optionsA8_4h(){
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

  async optionsQ3_8u(){
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

  async optionsQ5_4l(){
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

  async optionsQ7_7m(){
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

  async optionsTt_8n(){
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

  async optionsTt_8j(){
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

  async optionsTt_8s(){
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

  async optionsR8_42(){
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

  //lists of options for each model of volkswagen
  async optionsAmarok_2h(){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Options for Amarok 2H',
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

  async optionsCaddy_2k(){
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

  async optionsFox_5z(){
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

  async optionsGolf4_1j(){
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

  async optionsGolf5_1k(){
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

  async optionsGolf6_5k(){
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

  async optionsGolf7_5g(){
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

  async optionsPassat_3c(){
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

  async optionsPassat_3b(){
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

  async optionsPassat_3g(){
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

  async optionsPolo3_6n(){
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

  async optionsPolo4_9n(){
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

  async optionsPolo5_6r(){
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

  async optionsTiguan_5n(){
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

  async optionsTouareg_7l(){
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

  async optionsTouareg_7p(){
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

  async optionsTouareg_1t1(){
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

  async optionsTouareg_1t2(){
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

  async optionsTouareg_1t3(){
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

  async optionsTouran_2t(){
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

}
