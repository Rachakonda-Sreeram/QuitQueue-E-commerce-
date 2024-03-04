import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private dataSubject = new BehaviorSubject<{query:string; result:Product[];}>({query:"", result:[]});
  data$ = this.dataSubject.asObservable();

  updatreSearchData(newData:{query:string; result:Product[];} ) {
    this.dataSubject.next(newData);
  }
}