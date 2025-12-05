import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orthography-page',
  imports: [CommonModule],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrthographyPage { }
