import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class NotificationService {

  constructor(public toastr: ToastsManager) {
  }

  showSuccess(message: string, title?: string, options?: any) {
    this.toastr.success(message, title, options);
  }

  showError(message: string, title?: string, options?: any) {
    this.toastr.error(message, title, options);
  }

  showWarning(message: string, title?: string, options?: any) {
    this.toastr.warning(message, title, options);
  }

  showInfo(message: string, title?: string, options?: any) {
    this.toastr.info(message, title, options);
  }

  showCustom(message: string, title?: string, options?: any) {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  }


}
