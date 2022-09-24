import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()

export class ControlSectionService {
  currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1)
  lastPage!: number


  public get getCurrentPage$(): Observable<number> {
    return this.currentPage.asObservable()
  }

  public set setCurrentPage(newValue: number) {
    this.currentPage.next(newValue)
  }
}


