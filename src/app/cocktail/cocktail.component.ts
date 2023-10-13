import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  type = "";
  mainCocktailDetails: any = [];
  filterCocktailDetails: any = [];
  selectedCocktailDetail = null;
  cockDetailsEmpty = false;
  dropdownSelectedItem = "Alcoholic";

  constructor(private route: ActivatedRoute, private cockService: CocktailService) {
    this.route.paramMap.subscribe((data: any) => {
      this.type = data.get('type');
      this.getCocktailDetails(this.type);
    })
  }

  ngOnInit() {

  }

  getCocktailDetails(type: string) {
    this.cockService.getCocktailDetails(type).subscribe({
      next: (res) => {
        this.mainCocktailDetails = res.drinks;
        this.filterCocktailDetails = res.drinks;
      }
    });
  }

  onClickCocktailDetail(cocktailDetail: any) {
    this.selectedCocktailDetail = cocktailDetail;
  }

  onClose() {
    this.selectedCocktailDetail = null;
  }

  filterByProduct(event: any) {
    this.dropdownSelectedItem = event;
    let filterData = []
    if (event === 'Alcoholic') {
      filterData = this.mainCocktailDetails.filter((ele: any) =>
        ele.strAlcoholic === "Alcoholic"
      )
    } else {
      filterData = this.mainCocktailDetails.filter((ele: any) =>
        ele.strAlcoholic === "Non-Alcoholic"
      )
    }
    if (filterData.length == '') {
      this.cockDetailsEmpty = true;
    }
    this.filterCocktailDetails = filterData
  }

}
