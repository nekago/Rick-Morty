import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { CharactersListData } from '../../../global/entities/character-list-data.interface';
import { ApiService } from '../../../global/services/api.service';
import { API_CHARACTER_LIST } from '../../../global/constants/api';
import { CharacterParams } from '../../../global/entities/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterListService {
  private lastCharacterId!: number;

  public set setLastCharacterId(id: number) {
    this.lastCharacterId = this.lastCharacterId || id;
  }

  public get getLastCharacterId(): number {
    return this.lastCharacterId;
  }

  constructor(private apiService: ApiService) {}

  public getCharacterList(
    params: CharacterParams
  ): Observable<CharactersListData> {
    return this.apiService
      .get<CharactersListData>(API_CHARACTER_LIST, { ...params })
      .pipe(delay(50));
  }
}
