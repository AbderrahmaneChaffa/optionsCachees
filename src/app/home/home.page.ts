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
          console.log('Delete clicked');
        }
      }, {
        text: 'CADDY(2K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FOX(5Z)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'GOLF 6(5K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 7(5G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOURAN (2T)',
        
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

  async audilists() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Volkswagen Cars List',
      buttons: [{
        text: 'AMAROK (2H)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'CADDY(2K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FOX(5Z)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'GOLF 6(5K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 7(5G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOURAN (2T)',
        
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

  async skodalists() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'action-sheets',
      header: 'Volkswagen Cars List',
      buttons: [{
        text: 'AMAROK (2H)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'CADDY(2K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FOX(5Z)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'GOLF 6(5K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 7(5G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOURAN (2T)',
        
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
      header: 'Volkswagen Cars List',
      buttons: [{
        text: 'AMAROK (2H)',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'CADDY(2K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'FOX(5Z)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 4 (1J)',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'GOLF 5 (1K)',
        
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'GOLF 6(5K)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'GOLF 7(5G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3C)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3B)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'PASSAT (3G)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 3 (6N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 4 (9N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'POLO 5 (6R)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TIGUAN (5N)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7L)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (7P)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T1)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T2)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOUAREG (1T3)',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'TOURAN (2T)',
        
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
