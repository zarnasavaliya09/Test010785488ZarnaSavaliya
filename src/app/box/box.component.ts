import { Component, Input } from '@angular/core';
import { Box } from '../box-interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  newBox: Box = {
    size: 0,
    description: '',
    shippingLabelCode: '',
    recipient: 'Zarna Savaliya',
    weight: 0
  };

   boxList = [{
    size: 1,
    description: 'Amazon Box',
    shippingLabelCode: '1111',
    recipient: 'Zarna Savaliya',
    weight: 250
   }];

  addBox() {
    this.boxList.push({
      size: this.newBox.size,
      description: this.newBox.description,
      shippingLabelCode: this.newBox.shippingLabelCode,
      recipient: this.newBox.recipient ? this.newBox.recipient : '' ,
      weight: this.newBox.weight
     });
  }

}
