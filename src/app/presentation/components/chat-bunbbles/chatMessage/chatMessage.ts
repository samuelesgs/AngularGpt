import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chatMessage.html',
  styleUrl: './chatMessage.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessage {
  @Input({required : true}) text!: string;
}
