import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ShopCategory {
  name: string;
  image: string;
  description: string;
}

interface MarketplaceProduct {
  id: number;
  name: string;
  brand: string;
  sellerType: 'Siddhavetha' | 'Certified Partner';
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  format: string;
  description: string;
  benefits: string[];
}

@Component({
  selector: 'app-consumer-wellness',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consumer-wellness.html',
  styleUrl: './consumer-wellness.css'
})
export class ConsumerWellnessComponent implements OnDestroy {
  searchTerm = '';
  selectedCategory = 'All products';
  sortOption = 'featured';
  spotlightQuantity = 1;
  cartCount = signal(0);
  wishlistIds = signal<number[]>([]);
  spotlightProduct = signal<MarketplaceProduct | null>(null);

  categories: ShopCategory[] = [
    { name: 'All products', image: 'assets/images/shop/consumer-wellness-hero.png', description: 'Explore the full marketplace' },
    { name: 'Daily wellness', image: 'assets/images/shop/consumer-wellness-product1.png', description: 'Everyday herbal essentials' },
    { name: 'Women’s health', image: 'assets/images/shop/consumer-wellness-product2.png', description: 'Care for every life stage' },
    { name: 'Skin & beauty', image: 'assets/images/shop/personal2.png', description: 'Plant-powered personal care' },
    { name: 'Bath & body', image: 'assets/images/shop/consumer-wellness-product3.png', description: 'Restorative daily rituals' },
    { name: 'Organic home', image: 'assets/images/shop/Sustainable-living1.png', description: 'Conscious living essentials' }
  ];

  products: MarketplaceProduct[] = [
    {
      id: 1, name: 'Ageless Elixir', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Skin & beauty',
      image: 'assets/images/shop/consumer-wellness-product1.png', price: 1299, originalPrice: 1499, rating: 4.9,
      reviews: 128, badge: 'Bestseller', format: '30 ml botanical serum',
      description: 'A concentrated botanical serum rooted in Siddha wisdom to nourish, restore radiance and support resilient skin.',
      benefits: ['Farm-grown botanicals', 'Small-batch formulated', 'Cruelty-free']
    },
    {
      id: 2, name: 'Bath Ritual Collection', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Bath & body',
      image: 'assets/images/shop/consumer-wellness-product2.png', price: 1499, rating: 4.8, reviews: 94,
      badge: 'Giftable', format: 'Four-piece ritual set',
      description: 'A calming collection of handcrafted bathing essentials infused with aromatic herbs and restorative oils.',
      benefits: ['Complete self-care ritual', 'Natural aromatic oils', 'Reusable packaging']
    },
    {
      id: 3, name: 'Artisan Herbal Soaps', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Bath & body',
      image: 'assets/images/shop/consumer-wellness-product3.png', price: 599, originalPrice: 699, rating: 4.7,
      reviews: 211, badge: 'Popular', format: 'Set of three · 100 g each',
      description: 'Cold-crafted herbal soaps made with plant oils and pure extracts for a gentle, refreshing cleanse.',
      benefits: ['Palm-oil free', 'Naturally coloured', 'Handcrafted in India']
    },
    {
      id: 4, name: 'Amla Radiance Drops', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Skin & beauty',
      image: 'assets/images/shop/personal1.png', price: 899, rating: 4.8, reviews: 76, badge: 'New',
      format: '30 ml face oil',
      description: 'A lightweight amla and moringa facial oil designed to soften, brighten and replenish dry skin.',
      benefits: ['Antioxidant-rich', 'Non-greasy finish', 'No artificial fragrance']
    },
    {
      id: 5, name: 'Turmeric & Saffron Face Cream', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Skin & beauty',
      image: 'assets/images/shop/personal2.png', price: 749, originalPrice: 825, rating: 4.6, reviews: 63,
      format: '50 g daily moisturiser',
      description: 'A rich yet breathable moisturiser pairing turmeric, saffron and plant lipids for luminous daily care.',
      benefits: ['Deep hydration', 'Mineral-oil free', 'Suitable for daily use']
    },
    {
      id: 6, name: 'Neem Cleansing Body Oil', brand: 'Siddhavetha', sellerType: 'Siddhavetha', category: 'Bath & body',
      image: 'assets/images/shop/personal3.png', price: 849, rating: 4.7, reviews: 52,
      format: '200 ml cleansing oil',
      description: 'A soothing neem-based body oil for massage and gentle cleansing without stripping natural moisture.',
      benefits: ['Soap-free cleanse', 'Traditional oil blend', 'Recyclable bottle']
    },
    {
      id: 7, name: 'Herbal Home Cleanser', brand: 'Organic Partner Collective', sellerType: 'Certified Partner', category: 'Organic home',
      image: 'assets/images/shop/Sustainable-living1.png', price: 429, rating: 4.5, reviews: 47,
      badge: 'Partner pick', format: '500 ml concentrate',
      description: 'A plant-derived surface cleanser selected from an organic partner for effective everyday home care.',
      benefits: ['Plant-based formula', 'Refill friendly', 'Partner quality verified']
    },
    {
      id: 8, name: 'Everyday Steel Tiffin', brand: 'Tamil Nadu Organic Co-op', sellerType: 'Certified Partner', category: 'Organic home',
      image: 'assets/images/shop/Sustainable-living2.png', price: 1199, rating: 4.8, reviews: 88,
      badge: 'Low-waste', format: 'Two-container meal kit',
      description: 'A durable stainless-steel tiffin and organic cotton carry bag made for low-waste meals on the move.',
      benefits: ['Food-grade steel', 'Plastic-free', 'Community made']
    },
    {
      id: 9, name: 'Bamboo Daily Essentials', brand: 'Earthwise Living', sellerType: 'Certified Partner', category: 'Organic home',
      image: 'assets/images/shop/Sustainable-living3.png', price: 799, rating: 4.6, reviews: 39,
      format: 'Five-piece home set',
      description: 'A practical set of responsibly sourced bamboo essentials from a vetted sustainable-living partner.',
      benefits: ['Renewable materials', 'Plastic-light packaging', 'Responsible sourcing']
    }
  ];

  get filteredProducts(): MarketplaceProduct[] {
    const query = this.searchTerm.trim().toLowerCase();
    const filtered = this.products.filter(product => {
      const inCategory = this.selectedCategory === 'All products' || product.category === this.selectedCategory;
      const searchable = `${product.name} ${product.brand} ${product.category} ${product.description}`.toLowerCase();
      return inCategory && (!query || searchable.includes(query));
    });

    return [...filtered].sort((a, b) => {
      if (this.sortOption === 'price-low') return a.price - b.price;
      if (this.sortOption === 'price-high') return b.price - a.price;
      if (this.sortOption === 'rating') return b.rating - a.rating;
      return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.scrollTo('marketplace-products');
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'All products';
    this.sortOption = 'featured';
  }

  addToCart(_product: MarketplaceProduct, quantity = 1): void {
    this.cartCount.update(count => count + Number(quantity));
  }

  toggleWishlist(productId: number): void {
    this.wishlistIds.update(ids => ids.includes(productId) ? ids.filter(id => id !== productId) : [...ids, productId]);
  }

  isWishlisted(productId: number): boolean {
    return this.wishlistIds().includes(productId);
  }

  showDetails(product: MarketplaceProduct): void {
    this.spotlightProduct.set(product);
    this.spotlightQuantity = 1;
    document.body.style.overflow = 'hidden';
  }

  closeDetails(): void {
    this.spotlightProduct.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.spotlightProduct()) this.closeDetails();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  discount(product: MarketplaceProduct): number {
    if (!product.originalPrice) return 0;
    return Math.round((1 - product.price / product.originalPrice) * 100);
  }

  trackByProduct(_: number, product: MarketplaceProduct): number {
    return product.id;
  }
}
