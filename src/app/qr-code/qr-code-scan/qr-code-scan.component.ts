import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-qr-code-scan',
  templateUrl: './qr-code-scan.component.html',
  styleUrls: ['./qr-code-scan.component.css']
})
export class QrCodeScanComponent implements OnInit, AfterViewInit {
  @ViewChild('scanner')  scanner: ZXingScannerComponent;

   // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
    //   this.hasCameras = true;
    // });

    // this.scanner.scanComplete.subscribe((result: Result) => {
    //   this.qrResult = result;
    // });

  hasCameras = true;
  qrResultString: string;
  qrResult: Result;
  autofocusEnabled = true;
  scannerEnabled = true;
  constructor() {}

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  ngOnInit() {
   }

  ngAfterViewInit() {

  }

  turnOnCamera() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;
    });
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.log('Devices: ', cameras);
    this.availableDevices = cameras;
    if (this.availableDevices.length > 0) {
      this.selectedDevice = this.availableDevices[0];
    } else {
      console.log('No Camera Found !');
    }
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.selectedDevice = this.scanner.getDeviceById(selectedValue);
  }

  toggleCamera() {
    this.scannerEnabled = !this.scannerEnabled;
  }
}
