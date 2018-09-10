import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videoUrl = "192.168.1.140";
  newVideoUrl = "http://192.168.1.140:5000/video_feed";

  constructor(public navCtrl: NavController, private streamingMedia: StreamingMedia) {}

  setVideoUrl(){
    this.newVideoUrl = "http://" + this.videoUrl + ":5000/video_feed";
  }

}
