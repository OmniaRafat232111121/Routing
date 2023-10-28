import { Link, Outlet } from "react-router-dom";
import ProductItem from "./ProductItem"; // Import the ProductItem component

const Products = () => {
  // Define some sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      price: 30.99,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 4",
      price: 34.99,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Products</h1>
      <nav className="flex space-x-4 mb-4">
        <Link to="featured" className="text-blue-500 hover:underline">
          Featured
        </Link>
        <Link to="new" className="text-blue-500 hover:underline">
          New
        </Link>
      </nav>
      <Outlet />
      <div className="grid grid-cols-1
       md:grid-cols-2 lg:grid-cols-4
        gap-4 mt-10 ">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
