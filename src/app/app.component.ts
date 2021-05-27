import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ang';
  notFound: boolean;
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor( private location: Location, public MediaObserver: MediaObserver) {}


  ngOnInit(){
    this.mediaSub = this.MediaObserver.media$.subscribe(
      (result:MediaChange) =>{
        console.log(result.mqAlias);

        this.deviceXs = result.mqAlias === 'xs' ? true : false;
       }
      );
    }
    ngOnDestroy(){
      this.mediaSub.unsubscribe();
    }



  getLocation(): void {
    const routes = ['', '/company', '/notices', '/equipments', '/contact', '/blog', '/'];
    this.notFound = routes.includes(this.location.path());
  }
}
