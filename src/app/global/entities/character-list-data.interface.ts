import {CharacterListInfo} from "./character-list.interface";
import {Character} from "./character.interface";

export interface CharactersListData {
  info: CharacterListInfo
  results: Character[]
}
