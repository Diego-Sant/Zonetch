import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/productList";
import Container from "@/components/ui/container";

export const relative = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true});
  const billboard = await getBillboard("38f5648a-9b90-4c5c-997d-3f248f8838bc")

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Produtos disponíveis:" items={products} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home;