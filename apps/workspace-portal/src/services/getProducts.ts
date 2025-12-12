type ProductData = {
    id: number,
    image?: string,
    title: string,
    price: number,
}


export const getProducts = async (): Promise<ProductData[]> => {
  const response = await fetch(
    "https://693a73c39b80ba7262c9f9d9.mockapi.io/products"
  );

  console.log("response", response)

  if (!response.ok) throw new Error("Failed to fetch products");

  return response.json() as Promise<ProductData[]>;
};

