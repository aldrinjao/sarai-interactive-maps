import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { BaseModalComponent } from '../base-modal/base-modal.component';
@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.sass']
})

export class InfoModalComponent extends BaseModalComponent {
  @ViewChild('contentModal') contentModal: ModalDirective;

  constructor(injector: Injector) {
    // call the parent constructor
    super(injector);

    // retrieve properties from the injector
  }

  onHide() {
    super.onHide();
  }

  onShow() {
    super.onShow();
  }

}
