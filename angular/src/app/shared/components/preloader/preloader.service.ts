import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
    private pendingRequests: number = 0;

    getPendingRequests(): number {
        return this.pendingRequests;
    }

    showPreloader(): void {
        this.pendingRequests++;
    }

    hidePreloader(): void {
        this.pendingRequests--;
    }
}
