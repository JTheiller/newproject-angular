import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})

export class FlexComponent{
  toppings = new FormControl();
  name = new FormControl();
  name1 = 'teste';

 products = [
    { name: "Product A", description: "some description", picture: { uri: 'https://dummyimage.com/600x150/000/fff' } },
    { name: "Product B", description: "some description", picture: { uri: 'https://dummyimage.com/300x300/000/fff' } },
    { name: "Product C", description: "some description", picture: { uri: 'https://dummyimage.com/300x400/000/fff' } },
    { name: "Product D", description: "some description", picture: { uri: 'https://dummyimage.com/600x500/000/fff' } }]

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  // bancos = [
  //   {"codigo":1,
  //    "nome":"Banco do Brasil"},
  //   {"codigo":2,
  //    "nome":"Caixa Federal Economica"}       
  // ];
}