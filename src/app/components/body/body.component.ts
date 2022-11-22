import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  ngOnInit(): void {
  }
  getBodyCLass(): string{
    let styleClass = "";
    if(this.collapsed && this.screenWidth > 768){
      styleClass = "body-trimed";

    }else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = "body-md-screen"
    }
    return styleClass;
  }
}