import React from 'react';
import { ShoppingBag, X, Plus, Minus, MessageCircle, Star } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    let message = "Merhaba, Yılbaşı Mumları'ndan sipariş vermek istiyorum:\n\n";
    cart.forEach(item => {
      message += `▪ ${item.name} (${item.quantity} Adet) - ${item.price * item.quantity} TL\n`;
    });
    message += `\n*Toplam Tutar: ${totalPrice} TL*`;
    message += `\n\nSipariş teslimatı hakkında bilgi alabilir miyim?`;
    
    // Replace with actual business number
    const phoneNumber = "905555555555"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <h2 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2">
            <ShoppingBag size={22} className="text-red-800" />
            Sepetim <span className="text-stone-400 font-sans text-base font-normal">({cart.reduce((a,b)=>a+b.quantity,0)} ürün)</span>
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-stone-100 text-stone-500 hover:text-red-600 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50/30">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-6">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={40} className="opacity-30" />
              </div>
              <p className="text-lg font-medium">Sepetiniz henüz boş.</p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
              >
                Alışverişe Başla
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0 border border-stone-100">
                  {item.image ? (
                     <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = ''; // Clear source to trigger fallback
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                     />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-300">
                      <Star size={20} />
                    </div>
                  )}
                  {/* Fallback div if image fails or is null (handled via logic above for img tag) */}
                  <div className={`w-full h-full flex items-center justify-center text-stone-300 ${item.image ? 'hidden' : ''}`}>
                      <Star size={20} />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-sm text-stone-800 line-clamp-2 leading-tight">{item.name}</h4>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-stone-300 hover:text-red-500 transition-colors p-1 -mt-1 -mr-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-end justify-between mt-2">
                    <div className="text-red-800 font-bold text-sm bg-red-50 px-2 py-0.5 rounded">{item.price * item.quantity} TL</div>
                    
                    <div className="flex items-center gap-3 bg-stone-100 rounded-lg px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-stone-500 hover:text-red-600 transition-colors w-6 h-6 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center text-stone-800">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-stone-500 hover:text-green-600 transition-colors w-6 h-6 flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-stone-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-10">
            <div className="flex justify-between items-center text-lg font-bold text-stone-800 mb-4">
              <span>Genel Toplam</span>
              <span className="text-2xl font-serif text-red-900">{totalPrice} TL</span>
            </div>
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={22} fill="white" className="text-white" />
              WhatsApp ile Sipariş Ver
            </button>
            <p className="text-[10px] text-center text-stone-400 mt-3">
              'Sipariş Ver' butonuna tıkladığınızda WhatsApp uygulamasına yönlendirileceksiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};