import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  private characterList: BehaviorSubject<CharactersListData> =
    new BehaviorSubject<CharactersListData>({} as CharactersListData);

  public get getCharacterList$(): Observable<CharactersListData> {
    return this.characterList.asObservable();
  }

  public set setCharacterList(data: CharactersListData) {
    this.characterList.next(data);
  }

  public initCharacterList(): void {
    this.apiService.getAll().subscribe((data) => {
      this.setCharacterList = data;
    });
  }

  public getCharacterList(
    params: CharacterParams
  ): Observable<CharactersListData> {
    return this.http.get<CharactersListData>(API_MAIN_URL, {
      params: new HttpParams().appendAll(params),
    });
  }
}
