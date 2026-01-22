import ProductDetails from "../components/ProductDetails/ProductDetails";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import Cta from "../components/Cta";
import ProductDetailsFaq from "../components/ProductDetails/ProductDetailsFaq";

export default function Page() {
  return (
    <>
      <ProductDetails />
      <RelatedProducts />
      <Cta />
      <ProductDetailsFaq /> 

    </>
  );
}
