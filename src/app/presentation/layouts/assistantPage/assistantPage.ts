import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-assistant-page',
  imports: [CommonModule],
  templateUrl: './assistantPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantPage { }
