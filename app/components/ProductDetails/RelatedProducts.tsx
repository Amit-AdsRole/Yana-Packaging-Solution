import Image from "next/image";

type Product = {
  title: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Polypropylene Boxes",
    image: "/product-1.png",
  },
  {
    title: "CUBB X",
    image: "/product-1.png",
  },
  {
    title: "RE180",
    image: "/product-1.png",
  },
  {
    title: "PIRAMAD",
    image: "/product-1.png",
  },
];

export default function RelatedProducts() {
  return (
    <section className="w-full bg-[rgba(255,178,1,0.05)] py-6.75">
      <div className="mx-auto max-w-327 flex flex-col items-center gap-14">
        {/* Title */}
        <h2 className="font-kanit text-[40px] leading-12 tracking-[-1.2px] text-[#161C2D] text-center">
          Related Products
        </h2>

        {/* Products Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-10 w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full mx-auto flex flex-col items-center"
            >
              {/* Image */}
              <div className="relative w-63.75 h-65 rounded-[25px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label */}
              <p className="mt-6 font-kanit text-[24px] leading-9 text-[#101E28] text-center">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
