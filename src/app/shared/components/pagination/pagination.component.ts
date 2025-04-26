import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPages || changes.currentPage) {
      this.generatePagination();
    }
  }

  generatePagination(): void {
    this.pages = [];
    const maxVisiblePages = 5;

    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }
    } else {
      const startPage = Math.max(this.currentPage - 2, 1);
      const endPage = Math.min(
        startPage + maxVisiblePages - 1,
        this.totalPages
      );

      for (let i = startPage; i <= endPage; i++) {
        this.pages.push(i);
      }
    }
  }

  onPageChange(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
