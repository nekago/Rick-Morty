import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { CharactersListData } from '../../../global/entities/character-list-data.interface';
import { ApiService } from '../../../global/services/api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_MAIN_URL } from '../../../global/constants/api';
import { CharacterParams } from '../../../global/entities/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterListService {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  public getCharacterList(
    params: CharacterParams
  ): Observable<CharactersListData> {
    return this.http
      .get<CharactersListData>(API_MAIN_URL, {
        params: new HttpParams().appendAll({ ...params }),
      })
      .pipe(delay(50));
  }
}
