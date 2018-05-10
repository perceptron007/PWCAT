import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeReadComponent } from './qr-code-read/qr-code-read.component';
import { MaterialModule } from '../../material.module';
import { NgxKjuaModule } from 'ngx-kjua';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeScanComponent } from './qr-code-scan/qr-code-scan.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,




  ],
  declarations: [

  ],
  exports: [
  ]
})
export class QrCodeModule {}
