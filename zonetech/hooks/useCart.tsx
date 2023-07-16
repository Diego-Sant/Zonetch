import { Product } from "@/types";

import {toast} from "react-hot-toast";

import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

interface CartProps {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(persist<CartProps>((set, get) => ({
    items: [],
    addItem: (data: Product) => { 
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
            return toast.error("O item já está no carrinho!");
        }

        set({ items: [...get().items, data]});
        toast.success("Produto adicionado ao carrinho com sucesso!")
    },
    removeItem: (id: string) => {
        set({items: [...get().items.filter((item) => item.id !== id)]});
        toast.success("Produto removido do carrinho com sucesso!");
    },
    removeAll: () => set({items: []})
}), {
    name: 'carrinho',
    storage: createJSONStorage(() => localStorage)
}))

export default useCart;