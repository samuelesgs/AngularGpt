import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessage } from '../../components/chat-bunbbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bunbbles/myMessage/myMessage';

@Component({
  selector: 'app-orthography-page',
  imports: [CommonModule, ChatMessage, MyMessage],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage { }
