import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
const ProductsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    next: { revalidate: 300 },
  });
  const data = await res.json();
  const products: IProduct[] = data.products;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <div className="relative h-48 w-full mb-2">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-green-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
