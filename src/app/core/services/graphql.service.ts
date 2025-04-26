import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  query<T>(queryString: string, variables?: any): Observable<T> {
    const query = gql`${queryString}`;

    return this.apollo
      .watchQuery<T>({ query, variables })
      .valueChanges.pipe(map(result => result.data));
  }
}
