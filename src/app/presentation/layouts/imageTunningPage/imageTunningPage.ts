import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-tunning-page',
  imports: [CommonModule],
  templateUrl: './imageTunningPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTunningPage { }
