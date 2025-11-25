import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group border border-stone-100 flex flex-col h-full">
      <div className="aspect-square relative overflow-hidden bg-stone-100">
        {product.image && !imgError ? (
          <img 
            src={product.image} 
            alt={product.name}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-stone-300 bg-stone-50">
            <Star size={48} className="mb-2 opacity-20" />
            <span className="text-xs font-medium uppercase tracking-widest opacity-60">Görsel Yakında</span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-bold text-red-900 shadow-sm border border-stone-100">
          {product.price} TL
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-stone-800 mb-2 line-clamp-1 text-lg font-serif">{product.name}</h3>
        <p className="text-sm text-stone-500 mb-6 line-clamp-2 flex-grow leading-relaxed">{product.desc}</p>
        
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto w-full py-3 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-red-800 active:bg-red-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-200 hover:shadow-red-900/20"
        >
          <Plus size={18} strokeWidth={3} />
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};