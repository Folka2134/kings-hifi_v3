import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="bg-purple-500"></h1>
      <ProductList />
    </main>
  );
}
