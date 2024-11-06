{
  // Base class for items in the cart
  class CartItem {
    // Method to calculate total price, overridden by specific item types
    getTotalPrice(): number {
      return 0;
    }
  }

  // Physical Product with quantity
  class Product extends CartItem {
    unitPrice: number;
    quantity: number;

    constructor(unitPrice: number, quantity: number) {
      super();
      this.unitPrice = unitPrice;
      this.quantity = quantity;
    }

    getTotalPrice(): number {
      return this.unitPrice * this.quantity;
    }
  }

  // Gift Card with a fixed price
  class GiftCard extends CartItem {
    price: number;

    constructor(price: number) {
      super();
      this.price = price;
    }

    getTotalPrice(): number {
      return this.price;
    }
  }

  // Subscription service with a monthly rate and duration
  class Subscription extends CartItem {
    monthlyRate: number;
    months: number;

    constructor(monthlyRate: number, months: number) {
      super();
      this.monthlyRate = monthlyRate;
      this.months = months;
    }

    getTotalPrice(): number {
      return this.monthlyRate * this.months;
    }
  }

  // Function to calculate total cost of all items in the cart
  const calculateCartTotal = (cartItems: CartItem[]): number => {
    let total = 0;
    for (const item of cartItems) {
      total += item.getTotalPrice(); // Polymorphic behavior
    }
    return total;
  };

  // Sample items added to cart
  const cart = [
    new Product(30, 2), // 2 products at $30 each
    new GiftCard(50), // Gift card with fixed price of $50
    new Subscription(10, 3), // Subscription for 3 months at $10/month
  ];

  // Calculate and print total cart price
  const totalCartPrice = calculateCartTotal(cart);
  console.log(totalCartPrice); // Output: 140
}
