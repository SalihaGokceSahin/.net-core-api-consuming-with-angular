import { Component, Inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbPaginationModule, NgbAlertModule],
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

 

  searchTerm: string;
  page = 1;
  pageSize = 10;
  collectionSize: number;
  categories: Category[];
  allCategories: Category[];
  totalLength: number = 0;
  constructor(http: HttpClient) {
    http.get<Category[]>("https://localhost:44370/main").subscribe(result => {
      this.categories = result;
      this.allCategories = this.categories;

      this.collectionSize = result.length;
      this.totalLength = result.length;
    }, error => console.error(error));
  }

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<Category[]>(baseUrl + 'main').subscribe(result => {
  //    this.categories = result;
  //  }, error => console.error(error));
  //}

  search(value: string): void {
    this.categories = this.allCategories.filter((val) => val.kategori.toLocaleLowerCase().includes(value));
    this.collectionSize = this.categories.length;
  }


}


interface Category {
  id: number;
  halId: number;
  kategori: string;
}
