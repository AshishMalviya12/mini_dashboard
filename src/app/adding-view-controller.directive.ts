import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[adHost]'
})
export class AddingViewControllerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
