import { Renderer2, Component, OnInit, Inject, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'bender';
 searchInput="";
 loginShow=true;
 logoutShow=false;
  visible="block"
 // searchInput2="start";
 @ViewChild('searchBar') searchBar: ElementRef;

 constructor(private router: Router, private _renderer2: Renderer2, @Inject(DOCUMENT) private _document, private el: ElementRef) {
  
 }

 ngOnInit(){
   // console.log(this.searchInput2);

 }
 ngOnChanges(){
   console.log("in app component NGonChanges")
 }

 showBar(){
   console.log("in showBar()")
   this.visible="block"
   // this.router.navigate(['/benderAR'])
 }
 results(){
   console.log(this.searchInput);
   // this.router.navigate(['/home',{skipLocationChange:true}]);
   // this.searchBar.style.display="none";
   this.visible="none";
   this.router.navigate(['/search', this.searchInput]);
   this.searchInput="";
   // this.ngOnDestroy();
 }
   ngOnDestroy(){
     console.log("in onDestroy")
     console.log(this.el.nativeElement);
     this._renderer2.removeChild(this.el.nativeElement,this.searchBar.nativeElement);
     // this._renderer2.removeChild(this.el.nativeElement,this.a1.nativeElement);
     // this._renderer2.removeChild(this.el.nativeElement,this.a2.nativeElement);
   }
  
  }
