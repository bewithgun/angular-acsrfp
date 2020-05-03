import { Directive, HostBinding, Renderer2 , ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appAppDropdown]'
})
export class AppDropdownDirective{



@HostBinding('class.open') isOpen = false;
      @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}

}