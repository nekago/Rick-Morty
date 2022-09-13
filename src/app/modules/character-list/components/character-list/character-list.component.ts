import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CharactersListData} from "../../../../global/entities/character-list-data.interface";
import {CharacterListService} from "../../services/character-list.service";


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})

export class CharacterListComponent implements OnInit {

  characters$: Observable<CharactersListData> = new Observable<CharactersListData>()

  currentPage: number = 1
  lastPage!: number

  constructor(private characterListService: CharacterListService) {
  }

  ngOnInit() {
    this.characterListService.getAll().subscribe((data) => {
      this.characters$ = new Observable<CharactersListData>((subscriber) => {
        subscriber.next(data)
      })
      this.lastPage = data.info.pages
    })
  }

  modifyCurrentPage($event: number) {
    this.currentPage = $event
    console.log($event)
    this.characterListService.getAll({page: $event}).subscribe((data) => {
      this.characters$ = new Observable<CharactersListData>((subscriber) => {
        subscriber.next(data)
      })
    })
  }
}
