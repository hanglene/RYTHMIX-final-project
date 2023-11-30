import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("About us - Rhythmix"); 
  }
}
