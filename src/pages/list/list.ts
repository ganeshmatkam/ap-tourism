import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideoService } from '../../providers/_providers';
import { VideoDetails } from '../../components/video-details/video-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [VideoService],
})
export class ListPage {
  public videosList: Array<any>;
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  categoryGrid: Array<any>;
  categoryBox: Array<any>;
  categories: Array<String>;
  categoryList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoSvc: VideoService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  makeGrid() {
    this.categoryGrid = [];
    let categories = [];

    for (let v of this.videosList) {
      let cix = categories.indexOf(v.category);
      if (cix === -1) {
        categories.push(v.category);
        this.categoryGrid.push([v]);
      } else {
        this.categoryGrid[cix].push(v);
      }
    }
    this.categoryList = {};
    for (let c of this.categories) {
      this.categoryList[c + ''] = [];
    }

    for (let o of this.categoryGrid) {
      this.categoryList[o[0].category] = o;
    }
    console.log(this.categoryList);
    let i = 0;
    let temp = [];
    this.categoryBox = [];
    for (let o in this.categoryList) {
      if ((i) % 2 === 0) {
        this.categoryBox.push(temp);
        temp = [{
          title: o,
          count: this.categoryList[o].length
        }];
      } else {
        temp.push({
          title: o,
          count: this.categoryList[o].length
        });
      }
      i++;
    }
    if (temp.length > 0) {
      this.categoryBox.push(temp);
    }
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    console.log(item);
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  videoTapped(video) {
    console.log(video);
    this.navCtrl.push(VideoDetails, {
      video: video
    });
  }

  public loadVideos() {
    this.videosList = this.videoSvc.videosList;
    this.makeGrid();
  }

  public loadCategories() {
    this.categories = this.videoSvc.videosCategories;
  }

  public getVideoThumb(url: string): string {
    return this.videoSvc.getVideoThumb(url);
  }

  ngOnInit() {
    this.loadCategories();
    this.loadVideos();
  }
}
