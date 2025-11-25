import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-red-800 text-white p-1.5 rounded-lg shadow-md shadow-red-900/20">
            <Star size={20} fill="currentColor" strokeWidth={0} />
          </div>
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-red-950">
            Yılbaşı Mumları
          </h1>
        </div>
        
        <button 
          onClick={onOpenCart}
          className="relative p-2.5 hover:bg-stone-100 rounded-full transition-all hover:scale-105 active:scale-95 group"
          aria-label="Sepeti Aç"
        >
          <ShoppingBag size={24} className="text-stone-700 group-hover:text-red-800 transition-colors" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold min-w-[1.25rem] h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};