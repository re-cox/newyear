import { Product } from './types';

export const categories = ['Tümü', 'Ağaçlar', 'Şamdan', 'Figürler', 'Dekoratif'];

export const products: Product[] = [
  // Görseli Olan Ürünler
  { 
    id: 1, 
    name: 'Altın Varaklı Çam Ağacı (Büyük)', 
    price: 750, 
    category: 'Ağaçlar', 
    image: 'image_fdab37.png', 
    desc: 'Büyük boy, altın detaylı dekoratif çam ağacı. Salonunuzun yıldızı olmaya aday.' 
  },
  { 
    id: 2, 
    name: 'Noel Babalı Çam Ağacı', 
    price: 350, 
    category: 'Ağaçlar', 
    image: 'image_fdaaf8.png', 
    desc: 'Noel baba figürlü, detaylı yeşil çam ağacı. Klasik yılbaşı ruhu.' 
  },
  { 
    id: 3, 
    name: 'Süslemeli Çam Ağacı', 
    price: 350, 
    category: 'Ağaçlar', 
    image: 'image_fdab14.png', 
    desc: 'Renkli süsleme detaylı orta boy ağaç. Masalar için ideal.' 
  },
  { 
    id: 4, 
    name: 'Mini Çam Ağacı', 
    price: 100, 
    category: 'Ağaçlar', 
    image: 'image_fdaaf2.png', 
    desc: 'Küçük boy ışıltılı çam ağacı. Minimalist dekor sevenler için.' 
  },
  { 
    id: 5, 
    name: 'Kurşun Asker (Figür)', 
    price: 125, 
    category: 'Figürler', 
    image: 'image_fdab2f.png', 
    desc: 'Siyah ve bordo seçenekleriyle nostaljik kurşun asker figürü.' 
  },
  { 
    id: 6, 
    name: 'Hediye Kutusu Mum', 
    price: 175, 
    category: 'Dekoratif', 
    image: 'image_fdaab9.png', 
    desc: 'Şık siyah hediye paketi görünümlü mum. Yakmaya kıyamayacaksınız.' 
  },
  { 
    id: 7, 
    name: 'Fındıkkıran Şamdan Mum', 
    price: 100, 
    category: 'Şamdan', 
    image: 'image_fdae16.png', 
    desc: 'El boyaması fındıkkıran desenli şamdan mum.' 
  },
  { 
    id: 8, 
    name: 'Noel Baba Şapkalı Şamdan', 
    price: 100, 
    category: 'Şamdan', 
    image: 'image_fdadf9.png', 
    desc: 'Kırmızı şeritli ve şapka detaylı eğlenceli şamdan mum.' 
  },
  { 
    id: 9, 
    name: 'Tavşan & Asker Şamdan', 
    price: 100, 
    category: 'Şamdan', 
    image: 'image_fdae1f.png', 
    desc: 'Masalsı desenli, Alice Harikalar Diyarı temalı tasarım.' 
  },

  // Fiyat Listesinde Olup Görseli Henüz Yüklenmemiş Ürünler
  { id: 10, name: 'Kurabiye Adam', price: 400, category: 'Figürler', image: null, desc: 'Klasik gingerbread man figürü.' },
  { id: 11, name: 'Noel Baba (139g)', price: 250, category: 'Figürler', image: null, desc: 'Büyük boy Noel Baba figürü.' },
  { id: 12, name: 'Köpek Figürlü Mum', price: 250, category: 'Figürler', image: null, desc: 'Sevimli köpek figürü.' },
  { id: 13, name: 'Ev Figürlü Mum', price: 100, category: 'Dekoratif', image: null, desc: 'Kış temalı kar kaplı ev figürü.' },
  { id: 14, name: 'Noel Baba (87g)', price: 150, category: 'Figürler', image: null, desc: 'Orta boy Noel Baba figürü.' },
  { id: 15, name: 'Geyik Figürü', price: 50, category: 'Figürler', image: null, desc: 'Yılbaşı geyiği detayı.' },
];