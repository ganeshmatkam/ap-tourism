import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VideoService } from '../../providers/_providers';
import { VideoDetails } from '../../components/video-details/video-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [VideoService]
})
export class HomePage {
  public videosList: Array<any>;
  constructor(public navCtrl: NavController, private videoSvc: VideoService) {

  }

  public loadVideos(){
    this.videosList = this.videoSvc.videosList;
  }

   videoTapped(video) {
    console.log(video);
    this.navCtrl.push(VideoDetails, {
      video: video
    });
  }

  public getVideoThumb(url: string): string{
    return this.videoSvc.getVideoThumb(url);
  }

  ngOnInit(){
    this.loadVideos();
  }

}
