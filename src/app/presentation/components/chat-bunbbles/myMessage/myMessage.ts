import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-message',
  imports: [],
  templateUrl: './myMessage.html',
  styleUrl: './myMessage.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessage {
  @Input( { required: true}) text!: string ;
}
