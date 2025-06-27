export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products/search?q=phone");
  if (!res.ok) throw new Error("Xatolik yuz berdi");
  return res.json();
};
