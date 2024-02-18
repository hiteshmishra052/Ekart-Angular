import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // name="John Doe"
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone 13',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/assets/images/iPhone-12.png',
  // };

  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }

  // onNameChange(event: any) {
  //   // this.name = event.target.value;
  //   // console.log(event.target.value);
  // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) this.addToCart++;
  // }
  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }

  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}
