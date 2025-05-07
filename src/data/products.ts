import { Product } from '../types/Product';
import product1 from '../images/product/powder.png';
import product2 from '../images/product/alfalfa powder.png';
import product3 from '../images/product/tablets.png';
import product4 from  '../images/product/capsules.png';
import product5 from  '../images/product/barleys grass.png';
import product6 from  '../images/product/Moringa.png';
import product7 from  '../images/product/MoringaC.png';
import product8 from  '../images/product/MoringaT.png';


export const products: Product[] = [
  {
    id: 1,
    name: "Spirulina Powder",
    description: "Our premium organic spirulina powder is harvested from pristine waters and carefully processed to preserve its nutritional integrity. This superfood is packed with protein, vitamins, minerals, and antioxidants to support your overall health and wellbeing.",
    price: 29.99,
    compareAtPrice: 34.99,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product1,
     
    ],
    category: "powder",
    tags: ["organic", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "100g", price: 29.99 },
      { size: "250g", price: 59.99 },
      { size: "500g", price: 99.99 }
    ],
    features: [
      "65% protein by weight",
      "Rich in B vitamins, iron, and essential amino acids",
      "Supports immune function and energy levels",
      "Sustainably harvested and processed",
      "100% organic with no fillers or additives"
    ],
    ingredients: ["100% Organic Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "65g", dailyValue: "130%" },
      "Iron": { amount: "28mg", dailyValue: "156%" },
      "Vitamin B12": { amount: "200μg", dailyValue: "8333%" },
      "Calcium": { amount: "120mg", dailyValue: "12%" }
    },
    stock: 50,
    sku: "SPI-PWD-100",
    isOrganic: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Spirulina Tablets",
    description: "Our easy-to-take spirulina tablets offer a convenient way to include this nutrient-dense superfood in your daily routine. Each tablet contains pure, compressed spirulina with no binders or fillers.",
    price: 24.99,
    rating: 4.6,
    reviewCount: 86,
    images: [
      product3,
    ],
    category: "tablets",
    tags: ["tablets", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "100 tablets", price: 24.99 },
      { size: "250 tablets", price: 49.99 },
      { size: "500 tablets", price: 89.99 }
    ],
    features: [
      "500mg of pure spirulina per tablet",
      "Convenient for travel and busy lifestyles",
      "No artificial binders or fillers",
      "Easy to incorporate into daily routine",
      "60-day supply (at recommended dosage)"
    ],
    ingredients: ["100% Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "60g", dailyValue: "120%" },
      "Iron": { amount: "25mg", dailyValue: "139%" },
      "Vitamin B12": { amount: "180μg", dailyValue: "7500%" },
      "Calcium": { amount: "100mg", dailyValue: "10%" }
    },
    stock: 120,
    sku: "SPI-TAB-100"
  },
  {
    id: 3,
    name: "Premium Spirulina Capsules",
    description: "Our premium spirulina capsules deliver the powerful benefits of spirulina in an easy-to-swallow vegetarian capsule. Perfect for those who want the benefits without the taste.",
    price: 34.99,
    compareAtPrice: 39.99,
    rating: 4.9,
    reviewCount: 58,
    images: [
      product4,
    ],
    category: "capsules",
    tags: ["capsules", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 34.99 },
      { size: "120 capsules", price: 59.99 },
      { size: "240 capsules", price: 99.99 }
    ],
    features: [
      "750mg of spirulina per capsule",
      "Vegetarian capsules",
      "No taste, perfect for sensitive palates",
      "Higher concentration than standard tablets",
      "Third-party tested for purity"
    ],
    ingredients: ["Spirulina (Arthrospira platensis)", "Vegetable Cellulose (capsule)"],
    nutritionalInfo: {
      "Protein": { amount: "70g", dailyValue: "140%" },
      "Iron": { amount: "30mg", dailyValue: "167%" },
      "Vitamin B12": { amount: "220μg", dailyValue: "9167%" },
      "Calcium": { amount: "125mg", dailyValue: "13%" }
    },
    stock: 75,
    sku: "SPI-CAP-060",
    isNew: true
  },
  {
    id: 4,
    name: "Alfalfa Leaves Powder",
    description: "Our specially formulated smoothie blend combines pure spirulina with organic fruits and superfoods for a delicious, nutritious boost to your favorite smoothies.",
    price: 39.99,
    rating: 4.7,
    reviewCount: 42,
    images: [
        product2,
    ],
    category: "blends",
    tags: ["blend", "smoothie", "organic", "vegan", "gluten-free"],
    sizes: [
      { size: "200g", price: 39.99 },
      { size: "400g", price: 69.99 }
    ],
    features: [
      "30% spirulina combined with organic superfoods",
      "Contains acai, blueberry, and maca root",
      "Lightly sweetened with monk fruit",
      "Mixes easily in smoothies, juices, or water",
      "Fruity flavor makes spirulina more palatable"
    ],
    ingredients: [
      "Organic Spirulina (Arthrospira platensis)",
      "Organic Acai Powder",
      "Organic Blueberry Powder",
      "Organic Maca Root",
      "Organic Monk Fruit Extract"
    ],
    nutritionalInfo: {
      "Protein": { amount: "40g", dailyValue: "80%" },
      "Iron": { amount: "20mg", dailyValue: "111%" },
      "Vitamin B12": { amount: "150μg", dailyValue: "6250%" },
      "Calcium": { amount: "90mg", dailyValue: "9%" },
      "Antioxidants": { amount: "High", dailyValue: "-" }
    },
    stock: 30,
    sku: "SPI-BLN-200",
    isNew: true,
    isOrganic: true
  },
  {
    id: 5,
    name: "Spirulina Tablets",
    description: "This specialized spirulina formula is designed to support skin, hair, and nail health from the inside out, combining spirulina with beauty-enhancing nutrients.",
    price: 42.99,
    rating: 4.5,
    reviewCount: 36,
    images: [
      product3,
    ],
    category: "specialty",
    tags: ["beauty", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 42.99 },
      { size: "120 capsules", price: 79.99 }
    ],
    features: [
      "Combines spirulina with biotin and collagen support",
      "Contains antioxidant-rich ingredients",
      "Formulated to promote skin elasticity",
      "Supports healthy hair growth and strength",
      "Helps strengthen nails"
    ],
    ingredients: [
      "Spirulina (Arthrospira platensis)",
      "Biotin",
      "Vitamin C",
      "Bamboo Extract (silica)",
      "Hyaluronic Acid",
      "Vegetable Cellulose (capsule)"
    ],
    nutritionalInfo: {
      "Protein": { amount: "25g", dailyValue: "50%" },
      "Biotin": { amount: "5000μg", dailyValue: "16667%" },
      "Vitamin C": { amount: "80mg", dailyValue: "89%" },
      "Silica": { amount: "40mg", dailyValue: "-" }
    },
    stock: 45,
    sku: "SPI-BTY-060"
  },
  {
    id: 6,
    name: "Barleys Grass Powder",
    description: "Our premium Hawaiian spirulina is sourced from the pristine waters of Kona, Hawaii, known for producing some of the world's purest and most nutrient-dense spirulina.",
    price: 49.99,
    compareAtPrice: 59.99,
    rating: 4.9,
    reviewCount: 108,
    images: [
      product5,
      
    ],
    category: "powder",
    tags: ["premium", "hawaiian", "organic", "vegan", "gluten-free"],
    sizes: [
      { size: "100g", price: 49.99 },
      { size: "250g", price: 99.99 }
    ],
    features: [
      "Grown in mineral-rich Hawaiian deep ocean water",
      "Higher phycocyanin content than standard spirulina",
      "Exceptionally high nutrient density",
      "Rigorously tested for purity and potency",
      "Distinctive mild flavor"
    ],
    ingredients: ["100% Organic Hawaiian Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "70g", dailyValue: "140%" },
      "Iron": { amount: "32mg", dailyValue: "178%" },
      "Vitamin B12": { amount: "230μg", dailyValue: "9583%" },
      "Calcium": { amount: "130mg", dailyValue: "13%" },
      "Phycocyanin": { amount: "18%", dailyValue: "-" }
    },
    stock: 25,
    sku: "SPI-HWN-100",
    isOrganic: true,
    isBestSeller: true
  },
  {
    id: 7,
    name: "Moringa Powder",
    description: "Pure organic moringa powder, packed with essential nutrients and antioxidants. Perfect for smoothies, juices, and cooking.",
    price: 34.99,
    compareAtPrice: 39.99,
    rating: 4.7,
    reviewCount: 89,
    images: [
      product6,
    ],
    category: "powder",
    tags: ["organic", "vegan", "gluten-free", "premium"],
    sizes: [
      { size: "100g", price: 34.99 },
      { size: "250g", price: 69.99 },
      { size: "500g", price: 129.99 }
    ],
    features: [
      "Rich in vitamins A, C, and E",
      "High in calcium and iron",
      "Contains all essential amino acids",
      "Supports immune system",
      "Natural energy booster"
    ],
    ingredients: ["100% Organic Moringa Oleifera Leaf Powder"],
    nutritionalInfo: {
      "Protein": { amount: "27g", dailyValue: "54%" },
      "Iron": { amount: "28mg", dailyValue: "156%" },
      "Calcium": { amount: "2000mg", dailyValue: "200%" },
      "Vitamin A": { amount: "18.9mg", dailyValue: "2100%" }
    },
    stock: 45,
    sku: "MOR-PWD-100",
    isOrganic: true
  },
  {
    id: 8,
    name: "Moringa Capsules",
    description: "Convenient moringa capsules for easy daily supplementation. Each capsule contains pure moringa leaf powder for maximum nutrient absorption.",
    price: 29.99,
    rating: 4.6,
    reviewCount: 67,
    images: [
      product7,
    ],
    category: "capsules",
    tags: ["organic", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 29.99 },
      { size: "120 capsules", price: 54.99 },
      { size: "240 capsules", price: 99.99 }
    ],
    features: [
      "500mg moringa per capsule",
      "Easy to swallow",
      "No fillers or binders",
      "Convenient daily dosage",
      "Sustainably sourced"
    ],
    ingredients: ["Organic Moringa Oleifera Leaf Powder", "Vegetable Cellulose (capsule)"],
    nutritionalInfo: {
      "Protein": { amount: "25g", dailyValue: "50%" },
      "Iron": { amount: "25mg", dailyValue: "139%" },
      "Calcium": { amount: "1800mg", dailyValue: "180%" },
      "Vitamin A": { amount: "17mg", dailyValue: "1889%" }
    },
    stock: 85,
    sku: "MOR-CAP-060",
    isNew: true
  },
  {
    id: 9,
    name: "Moringa Tablets",
    description: "Compressed moringa tablets for those who prefer a tablet form. Each tablet contains pure moringa leaf powder for optimal nutrition.",
    price: 27.99,
    rating: 4.5,
    reviewCount: 52,
    images: [
      product8,
    ],
    category: "tablets",
    tags: ["organic", "vegan", "gluten-free"],
    sizes: [
      { size: "100 tablets", price: 27.99 },
      { size: "200 tablets", price: 49.99 },
      { size: "400 tablets", price: 89.99 }
    ],
    features: [
      "400mg moringa per tablet",
      "No artificial binders",
      "Easy to take",
      "Long shelf life",
      "Pure and natural"
    ],
    ingredients: ["Organic Moringa Oleifera Leaf Powder"],
    nutritionalInfo: {
      "Protein": { amount: "24g", dailyValue: "48%" },
      "Iron": { amount: "24mg", dailyValue: "133%" },
      "Calcium": { amount: "1750mg", dailyValue: "175%" },
      "Vitamin A": { amount: "16mg", dailyValue: "1778%" }
    },
    stock: 65,
    sku: "MOR-TAB-100"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 3): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(tag => product.tags.includes(tag))))
    .slice(0, limit);
};

export const getFilteredProducts = (
  categoryFilter?: string,
  search?: string,
  tagFilters: string[] = []
): Product[] => {
  return products.filter(product => {
    // Category filter
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(searchLower);
      const descMatch = product.description.toLowerCase().includes(searchLower);
      if (!nameMatch && !descMatch) {
        return false;
      }
    }
    
    // Tag filters
    if (tagFilters.length > 0) {
      const hasAllTags = tagFilters.every(tag => product.tags.includes(tag));
      if (!hasAllTags) {
        return false;
      }
    }
    
    return true;
  });
};