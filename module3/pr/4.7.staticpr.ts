class Library {
  // Static property, shared across all instances
  static totalBooks: number = 100;

  // Instance property, unique to each instance
  branchName: string;

  constructor(branchName: string) {
    this.branchName = branchName;
  }

  // Static method to get total books, accessible via the class
  static getTotalBooks() {
    return Library.totalBooks;
  }
}

// Accessing static property via the class (correct usage)
console.log(Library.totalBooks); // Output: 100

// Creating an instance
const cityLibrary = new Library("City Library");

// Accessing instance property
console.log(cityLibrary.branchName); // Output: City Library

// Trying to access static property via the instance (incorrect usage)
//w: console.log(cityLibrary.totalBooks); // Error: Property 'totalBooks' does not exist on type 'Library'
