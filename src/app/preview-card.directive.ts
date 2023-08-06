import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appPreviewCard]'
})
export class PreviewCardDirective {
    @Input('previewSize')
    size: number = this.el.nativeElement.style.width

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseIn() {
        this.setFontSize(this.size)
    }

    @HostListener('mouseleave') onMouseOut() {
        this.setFontSize(320)
    }

    setFontSize(value: number): void {
        this.el.nativeElement.style.width = `${value}px`
    }
}
