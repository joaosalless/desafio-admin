import { Component } from '@angular/core';
import { PreloaderService } from './preloader.service';

@Component({
    selector: 'preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
    constructor(public preloaderService: PreloaderService) {
    }
}

