import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage  {
public mark:any;
public model:any;
public option:any;
public texttoolbar:any;
public urljdid:any;
images = [];

slierOpts = {
  zoom:{
maxRatio: 2
  }
};
  constructor(private storage:Storage,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage) { 

    this.storage.get('mark').then((mark) => {
      this.mark = mark;
      this.urljdid= mark+'/';
console.log(this.urljdid);
  });
  this.storage.get('model').then((model) => {
    this.model = model;
    this.urljdid+=model+'/'
    this.getImagesDatabase(this.urljdid);
});
this.storage.get('option').then((option) => {
  this.option = option;
  /*this.urljdid+=option;
  console.log(this.urljdid)*/
  
});

this.storage.get('texttoolbar').then((texttoolbar) => {
  this.texttoolbar = texttoolbar;
});

  }

 
 async getImagesDatabase(urljdid: any) {
    // pour récupérer les informations des images
    
this.afDB.list(urljdid).snapshotChanges(['child_added']).subscribe(images => {
  images.forEach(image => {
//console.log('Image :' + image.payload.exportVal().ref);
this.getImagesStorage(image);
  });
  
});
  }
  
  getImagesStorage(image:  any) {
    // pour récupérer l'URL des images
const imgRef = image.payload.exportVal().refimg;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        octet :image.payload.exportVal().octet,
        bit :image.payload.exportVal().bit,
        rout :image.payload.exportVal().rout,
        text :image.payload.exportVal().text,
        url :imgUrl
      })
    });
  }

}
