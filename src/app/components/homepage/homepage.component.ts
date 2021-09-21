import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'Welcome to our Tandoor Indian Cuisine!';
  subtitle = 'What is your Choice?';

  constructor() { }

  ngOnInit(): void {

  }

}
