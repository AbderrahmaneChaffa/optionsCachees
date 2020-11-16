import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {
public mark:any;
public model:any;
public option:any;
public texttoolbar:any;

  constructor(private storage:Storage) { 

    this.storage.get('mark').then((mark) => {
      this.mark = mark;
  });
  this.storage.get('model').then((model) => {
    this.model = model;
});
this.storage.get('option').then((option) => {
  this.option = option;
});
this.storage.get('texttoolbar').then((texttoolbar) => {
  this.texttoolbar = texttoolbar;
});
  }

  ngOnInit() {
  }

}
