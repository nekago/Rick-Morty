import {Injectable} from "@angular/core";
import {CharacterParams} from "../entities/character.interface";
import {Observable} from "rxjs";
import {CharactersListData} from "../entities/character-list-data.interface";
import {API_MAIN_URL} from "../constants/api";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getAll(params?: CharacterParams): Observable<CharactersListData> {
    return this.http.get<CharactersListData>(API_MAIN_URL, {
      params: {...params}
    })
  }
}
