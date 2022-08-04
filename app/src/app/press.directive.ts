import { style } from '@angular/animations';
import { Directive , HostListener , ElementRef , Input , Renderer2 } from '@angular/core';
declare var CrComLib: any;
@Directive({
  selector: '[DigPress]'
})
export class PressDirective {


  @Input('DigPress') join: number;
  private timerID: ReturnType<typeof setTimeout>;
  private disable: boolean;

  constructor(private el: ElementRef ,private renderer: Renderer2 ) {}


  @HostListener('input') onInput(){
CrComLib.publishEvent('n', String(this.join), Number(this.el.nativeElement.value));
  }









//   @HostListener('click') onClick(){
//     this.renderer.addClass(this.el.nativeElement , 'active');

//     if (this.el.nativeElement.disabled !== true) {
//       // this.crcom.press(this.join);
//       CrComLib.publishEvent('b', String(this.join), true);
//       this.disable = true;
//       this.timerID = setTimeout(() => this.disable = false, 10);
   
// }
//   }













  @HostListener('touchstart') onTouchStart(){
    this.renderer.addClass(this.el.nativeElement , 'active');

    if (this.el.nativeElement.disabled !== true) {
      // this.crcom.press(this.join);
      CrComLib.publishEvent('b', String(this.join), true);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
   
}
  }




  
  @HostListener('touchend', ['$event']) onTouchEnd(e) {
    this.renderer.removeClass(this.el.nativeElement , 'active');
    if (this.el.nativeElement.disabled !== true) {
      e.preventDefault();
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
    }
  }
  @HostListener('touchcancel') onTouchCancel() {
    if (this.el.nativeElement.disabled !== true) {
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
    }
  }















}
