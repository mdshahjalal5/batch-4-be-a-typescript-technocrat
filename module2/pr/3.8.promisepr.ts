type Product = {
  id: number;
  name: string;
  price: number;
};

const createProduct = (product: Product): Promise<Product> => {
  return new Promise<Product>((resolve, reject) => {
    const success = Math.random() > 0.2; // Simulate 80% success rate
    setTimeout(() => {
      if (success) {
        resolve(product);
      } else {
        reject("Product creation failed!");
      }
    }, 1000); // Simulates a 1-second API delay
  });
};

// Usage example:
const newProduct: Product = { id: 1, name: "Smartphone", price: 299 };

const addProduct = async () => {
  try {
    const result = await createProduct(newProduct);
    console.log("Product created:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

addProduct();
