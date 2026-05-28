import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  code: string;
  category: string;
}

export interface CartGroup {
  category: string;
  businessName: string;
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}

interface CartContextType {
  items: CartItem[];
  cartGroups: CartGroup[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  removeCategoryFromCart: (category: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

export function getCartBusinessName(category: string) {
  if (category === 'Repuestos automotrices') {
    return 'Autopartes BigDam';
  }

  return category;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const removeCategoryFromCart = (category: string) => {
    setItems(prev => prev.filter(item => item.category !== category));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartGroups = useMemo(() => {
    const groups = new Map<string, CartGroup>();

    for (const item of items) {
      const current = groups.get(item.category);

      if (current) {
        current.items.push(item);
        current.subtotal += item.price * item.quantity;
        current.itemCount += item.quantity;
        continue;
      }

      groups.set(item.category, {
        category: item.category,
        businessName: getCartBusinessName(item.category),
        items: [item],
        subtotal: item.price * item.quantity,
        itemCount: item.quantity,
      });
    }

    return Array.from(groups.values());
  }, [items]);

  return (
    <CartContext.Provider value={{
      items,
      cartGroups,
      addToCart,
      removeFromCart,
      removeCategoryFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
