import {Component, EventEmitter, Input, Output} from "@angular/core";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons/faAnglesRight";

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html'
})

export class PaginationComponent {
  @Input() currenPage!: number
  @Input() lastPage!: number
  @Output() modifyCurrentPage: EventEmitter<number> = new EventEmitter<number>()

  faAngleLeft = faAngleLeft
  faAnglesLeft = faAnglesLeft
  faAngleRight = faAngleRight
  faAnglesRight = faAnglesRight

  get isFirstPage(): boolean {
    return this.currenPage === 1
  }
  get isLastPage(): boolean {
    return this.currenPage === this.lastPage
  }

  changePage(opt: 'first' | 'last' | 'next' | 'prev') {
    switch (opt) {
      case "first":
        this.modifyCurrentPage.emit(1)
        return;
      case "last":
        this.modifyCurrentPage.emit(this.lastPage)
        return;
      case "next":
        this.modifyCurrentPage.emit(this.currenPage + 1)
        return;
      case "prev":
        this.modifyCurrentPage.emit(this.currenPage - 1)
        return;
    }
  }


}
