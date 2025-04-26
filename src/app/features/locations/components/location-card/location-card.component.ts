import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '../../../../core/models/location.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationCardComponent {
  @Input() location!: Location;
}
