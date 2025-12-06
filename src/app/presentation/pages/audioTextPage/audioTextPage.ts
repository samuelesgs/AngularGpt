import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-audio-text-page',
  imports: [CommonModule],
  templateUrl: './audioTextPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioTextPage { }
