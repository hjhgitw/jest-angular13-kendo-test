import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public gridData: any[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        UnitPrice: 19,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    },
    {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        UnitPrice: 10,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments'
        }
    }
];

}
