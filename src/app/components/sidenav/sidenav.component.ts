import { Component, Output, EventEmitter, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],

  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({opacity: 0}),
  //       animate('350ms',
  //         style({opacity: 1})
  //       )
  //     ]),
  //     transition(':leave', [
  //       style({opacity: 1}),
  //       animate('350ms',
  //         style({opacity: 0})
  //       )
  //     ])
  //   ]),
  //   trigger('rotate', [
  //     transition(':enter', [
  //       animate('1000ms',
  //         keyframes([
  //           style({transform: 'rotate(0deg)', offset: '0'}),
  //           style({transform: 'rotate(2turn)', offset: '1'})
  //         ])
  //       )
  //     ])
  //   ])
  // ],
  encapsulation: ViewEncapsulation.None
})

export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  // toggleCollapse(): void {
  //   this.collapsed = !this.collapsed;
  //   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  // }

  // closeSidenav(): void {
  //   this.collapsed = false;
  //   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  // }
  animationLogoRecortado: any;
  animationOpenNavar: any;
  animationLogitos: any
  vectorEscala : any;
  OpenOrClose = false;
  clickOpenNavar () {
    this.animationOpenNavar = {
      width: 300, // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      duration: 200
    }
  }
  clickCloseNavar (){
    this.animationOpenNavar={
      width: 80, // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      duration: 200
    }
  }
  navar () {
    if(this.OpenOrClose==false){
      console.log("🚀 ~ file: sidenav.component.ts ~ line 92 ~ SidenavComponent ~ navar ~ OpenOrClose", this.OpenOrClose)
      this.clickOpenNavar ()
      this.DespliegueLogo ("1")
      this.DespliegueLogito ("1")
     this.OpenOrClose=true
    }else{
      if(this.OpenOrClose==true){
        this.clickCloseNavar ()
        this.DespliegueLogo ("reverse")
        this.DespliegueLogito ("reverse")
        this.OpenOrClose=false
      }
    }

  }
  DespliegueLogo (vectorEscala: any){
    this.animationLogoRecortado={
      translateX: [-50,0],
      delay: 200,
      opacity: [0,1],
    }
  }
  DespliegueLogito (vectorEscala: any){
    this.animationLogitos ={
      translateX: [-50,0],
      delay: 200,
      opacity: [0,1],

    }
  }
}
