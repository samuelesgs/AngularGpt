import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-const-stream-page',
  imports: [CommonModule],
  templateUrl: './prosConstStreamPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsConstStreamPage { }
