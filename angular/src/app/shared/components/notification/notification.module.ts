import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { ToastModule, ToastOptions } from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'flyRight'; // you can override any options available
  newestOnTop = true;
  showCloseButton = false;
}

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent,
    ToastModule,
  ],
  providers: [
    {provide: ToastOptions, useClass: CustomOption},
  ]
})
export class NotificationModule {
}
