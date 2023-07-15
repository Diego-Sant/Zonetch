import getBrand from "@/actions/getBrand";
import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";

import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/noResults";
import ProductCard from "@/components/ui/productCard";
import MobileFilter from "./components/mobileFilter";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    brandId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    brandId: searchParams.brandId,
  });

  const brands = await getBrand();
  const colors = await getColors();
  const categories = await getCategory(params.categoryId);
  
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={categories.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-5 gap-x-8">
            <MobileFilter brands={brands} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="brandId" name="Fabricante" data={brands} />
              <Filter valueKey="colorId" name="Cores" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage