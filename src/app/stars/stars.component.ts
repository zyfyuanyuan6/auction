import { Component, OnInit, OnChanges, Input, Host, Inject, forwardRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating: number = 0;

  private stars: boolean[];
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  private readonly: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
