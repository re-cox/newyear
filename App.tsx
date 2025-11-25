import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { products, categories } from './constants';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { Info } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} sepete eklendi.`);
    setIsCartOpen(true); // Optional: Auto open cart to show feedback
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredProducts = selectedCategory === 'Tümü' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-red-100 selection:text-red-900">
      
      <Header 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900 to-red-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Evinize Yılbaşı Büyüsü</h2>
          <p className="text-red-100 text-lg md:text-xl font-light leading-relaxed">
            El yapımı mumlar, ışıltılı ağaçlar ve özel tasarım figürlerle yeni yıl ruhunu yaşam alanlarınıza taşıyın.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-3 md:justify-center px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                  selectedCategory === cat
                    ? 'bg-red-800 text-white shadow-lg shadow-red-900/20 scale-105'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-12 pb-32">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-500">
            <p className="text-lg">Bu kategoride henüz ürün bulunmuyor.</p>
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-stone-900/95 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-fade-in-up backdrop-blur-md">
          <div className="bg-green-500 rounded-full p-0.5">
             <Info size={14} className="text-stone-900" strokeWidth={3} />
          </div>
          <span className="text-sm font-medium tracking-wide">{notification}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Yılbaşı Mumları. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-stone-600">Sevgiyle el yapımı üretilmiştir.</p>
        </div>
      </footer>
    </div>
  );
}