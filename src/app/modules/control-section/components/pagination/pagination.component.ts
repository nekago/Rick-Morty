import { Component, Input, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons/faAnglesLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() lastPage!: number;

  faAngleLeft = faAngleLeft;
  faAnglesLeft = faAnglesLeft;
  faAngleRight = faAngleRight;
  faAnglesRight = faAnglesRight;

  ngOnInit() {}
}
