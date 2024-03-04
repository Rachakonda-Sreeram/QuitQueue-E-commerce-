import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlideInterface } from 'src/app/model/sliderInterface.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild('videoPlayer') videoPlayer:ElementRef;
  // playVideo(){
  //   const video: HTMLVideoElement=this.videoPlayer?.nativeElement;
  //   video.play();
  // }
  // pauseVideo(){
  //   const video: HTMLVideoElement=this.videoPlayer?.nativeElement;
  //   video.pause();
  // }
  // toggleVideo() {
  //   this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
  // }
  toggleVideo() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.muted = !video.muted;
  }
}
