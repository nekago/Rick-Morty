import { Injectable } from '@angular/core';
import { ApiService } from '../../../global/services/api.service';
import { Observable } from 'rxjs';
import { Character } from '../../../global/entities/character.interface';
import { API_CHARACTER_SINGLE } from '../../../global/constants/api';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailService {
  constructor(private apiService: ApiService) {}

  public getCharacterById(id: string): Observable<Character> {
    return this.apiService.get<Character>(`${API_CHARACTER_SINGLE}${id}`);
  }
}
