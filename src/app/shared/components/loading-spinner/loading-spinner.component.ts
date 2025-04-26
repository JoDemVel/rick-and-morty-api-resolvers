import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {
  constructor(public loadingService: LoadingService) {}
}
