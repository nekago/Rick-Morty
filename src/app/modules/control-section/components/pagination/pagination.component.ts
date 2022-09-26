import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons/faAnglesLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterParams } from '../../../../global/entities/character.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Input() currentPage!: number;
  @Input() lastPage!: number;

  private ngDestroy$ = new Subject<void>();
  private params!: CharacterParams;

  faAngleLeft = faAngleLeft;
  faAnglesLeft = faAnglesLeft;
  faAngleRight = faAngleRight;
  faAnglesRight = faAnglesRight;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((params) => {
        this.params = params;
        console.log(params);
      });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  public firstPage() {
    this.setQueryParams({ page: 1, ...this.params });
  }
  public nextPage() {
    this.setQueryParams({ ...this.params, page: this.currentPage + 1 });
  }
  public prevPage() {
    this.setQueryParams({ page: this.currentPage - 1, ...this.params });
  }
  public endPage() {
    this.setQueryParams({ page: this.lastPage, ...this.params });
  }
  private setQueryParams(params: CharacterParams) {
    this.router.navigate(['/characters'], {
      queryParams: {
        page: params.page,
        name: undefined,
        status: undefined,
        gender: undefined,
      },
    });
  }
}
