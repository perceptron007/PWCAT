import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '../material.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeReadComponent } from './qr-code/qr-code-read/qr-code-read.component';
import { QrCodeScanComponent } from './qr-code/qr-code-scan/qr-code-scan.component';
import { NgxKjuaModule } from 'ngx-kjua';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

const routes: Routes = [
  { path: 'scan', component: QrCodeScanComponent },
  { path: 'generate', component: QrCodeReadComponent }

];

@NgModule({
  declarations: [AppComponent,
    QrCodeReadComponent,
    QrCodeScanComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    QrCodeModule,
    RouterModule.forRoot(routes),
    NgxKjuaModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ZXingScannerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
