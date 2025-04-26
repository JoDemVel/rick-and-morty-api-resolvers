import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from '../../../core/services/graphql.service';
import { Episode } from 'src/app/core/models/episode.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterGraphqlService {
  constructor(private graphql: GraphqlService) {}

  getCharacters(page: number = 1): Observable<any> {
    const query = `
      query ($page: Int!) {
        characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            image
            episode {
              id
              name
              episode
            }
            created
          }
        }
      }
    `;
    return this.graphql.query<any>(query, { page });
  }
}
