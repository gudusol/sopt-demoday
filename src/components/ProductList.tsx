import { listDataType } from "../../public/data/listData";
import ListCard from "./ListCard";

interface ProductListProps {
  products: listDataType[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-[1.3rem] gap-y-[2.6rem]">
      {products.map((product) => {
        return (
          <ListCard
            key={product.ProductName}
            imageUrl={product.imageUrl}
            name={product.ProductName}
            category={product.category}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
