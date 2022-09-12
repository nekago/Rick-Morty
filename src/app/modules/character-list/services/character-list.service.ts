import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharactersListData} from "../../../global/entities/character-list-data.interface";
import {API_MAIN_URL} from "../../../global/constants/api";
import {CharacterParams} from "../../../global/entities/character.interface";


@Injectable({
  providedIn: 'root'
})

export class CharacterListService {


  constructor(private http: HttpClient) {

  }

  public getAll(params?: CharacterParams): Observable<CharactersListData> {
    return this.http.get<CharactersListData>(API_MAIN_URL, {
      params: {...params}
    })
  }

}
