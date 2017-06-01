import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideoService } from '../../providers/_providers';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [VideoService],
})
export class ListPage {
   public videosList: Array<any>;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  categoryGrid: Array<any>;
  categories: Array<String>;
  categoryList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoSvc: VideoService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  makeGrid(){
    this.categoryGrid = [];
    let categories = [];

    for(let v of this.videosList){
      let cix = categories.indexOf(v.category);
      if( cix === -1) {
        categories.push(v.category);
        this.categoryGrid.push([v]);
      } else {
        this.categoryGrid[cix].push(v);
      }
    }
    this.categoryList = {};
    for(let c of this.categories){
      this.categoryList[c+''] = [];
    }
    for(let o of this.categoryGrid){
      this.categoryList[o[0].category] = o;
    }
    console.log(this.categoryList, this.categoryList['Khammam']);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  public loadVideos(){
    this.videosList = this.videoSvc.videosList;
    this.makeGrid();
  }

  public loadCategories() {
    this.categories = this.videoSvc.videosCategories;
  }

  public getVideoThumb(url: string): string{
    return this.videoSvc.getVideoThumb(url);
  }

  ngOnInit(){
    this.loadCategories();
    this.loadVideos();
  }
}
