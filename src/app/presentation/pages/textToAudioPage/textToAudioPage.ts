import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-to-audio-page',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './textToAudioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextToAudioPage {}
