import { Brand } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/marca`;

const getBrand = async (): Promise<Brand[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getBrand;