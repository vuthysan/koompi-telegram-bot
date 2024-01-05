import { SetStoreFunction, Store, createStore } from "solid-js/store";
import {
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";

export const CartContext = createContext([]);

type ProductType = {
  id: string;
  image: string;
  price: number;
};

type CartType = {
  price: number;
  id: string;
  product: ProductType;
  qty: number;
  subtotal: number;
};

// if (localStorage.store) {
//   try {
//     setState(JSON.parse(localStorage.store));
//   } catch (error) {
//     setState(() => initialState);
//   }
// }
// createEffect(() => {
//   localStorage.store = JSON.stringify(state);
// });

export function createLocalStore<T extends object>(
  name: string,
  init: T
): [Store<T>, SetStoreFunction<T>] {
  const localState = localStorage.getItem(name);
  const [state, setState] = createStore<T>(
    localState ? JSON.parse(localState) : init
  );
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));
  return [state, setState];
}

export function CartProvider(props: { children: any }) {
  const [items, setItems] = createLocalStore<CartType[]>("store", []);
  const [total, setTotal] = createSignal(0);

  createEffect(() => {
    let subtotal = 0;

    items.forEach((item) => {
      subtotal = subtotal + item.subtotal;
    });

    setTotal(subtotal);
  });

  const quantity = () => {
    return items.reduce((acc, current): number => {
      return acc + current.qty;
    }, 0);
  };

  const addToCart = (product: ProductType) => {
    // check if proudct exist
    const isItem = items.find((p): boolean => p.id === product.id);
    if (isItem) {
      setItems(
        (p) => p.id === product.id,
        "qty",
        (qty: number) => qty + 1
      );
      setItems(
        (p) => p.id === product.id,
        "subtotal",
        isItem.price * isItem.qty
      );
      return;
    }
    setItems([...items, { ...product, qty: 1, subtotal: product?.price }]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item?.id !== id));
  };

  const addQuantity = (id: string) => {
    const isItem = items.find((p) => p.id === id);
    if (isItem) {
      setItems(
        (p) => p.id === id,
        "qty",
        (q: number) => q + 1
      );
      setItems((p) => p.id === id, "subtotal", isItem.price * isItem.qty);
      return;
    }
  };

  const subQuantity = (id: string) => {
    const isItem = items.find((p) => p.id === id);

    if (items.find((item) => item.id === id)?.qty === 1) return removeItem(id);

    if (isItem) {
      setItems(
        (p) => p.id === id,
        "qty",
        (q: number) => q - 1
      );
      // update subtotal
      setItems((p) => p.id === id, "subtotal", isItem.subtotal - isItem.price);
      return;
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        quantity,
        addToCart,
        removeItem,
        subQuantity,
        addQuantity,
        total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
