import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from '../services/location.service';
import { Location } from '../../../core/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationDetailResolver implements Resolve<Location> {
  constructor(private locationService: LocationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location> {
    const id = parseInt(route.paramMap.get('id') || '1', 10);
    return this.locationService.getLocationById(id);
  }
}
