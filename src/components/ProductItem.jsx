/* eslint-disable react/prop-types */
// ProductItem.js

const ProductItem = ({ name, description, price }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4 
    transform transition-transform hover:scale-105 cursor-pointer
">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-500 font-semibold mt-2">${price}</p>
    </div>
  );
};

export default ProductItem;
