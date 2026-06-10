// ============================================================
// Product Types
// ============================================================

export type ProductType = "CUSTOM_MADE" | "READY_MADE";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  oldPrice: number | null;
  currency: string;
  images: string[];
  material: string | null;
  color: string | null;
  width: number | null;
  height: number | null;
  depth: number | null;
  weight: number | null;
  inStock: boolean;
  stockCount: number;
  categoryId: string;
  category: Category;
  brand: string | null;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;

  // Manufacturing-specific fields
  productType: ProductType;
  minWidth: number | null;
  maxWidth: number | null;
  minHeight: number | null;
  maxHeight: number | null;
  minDepth: number | null;
  maxDepth: number | null;
  basePrice: number | null;
  manufacturingDays: number;
  materialOptions: string[];
  colorOptions: string[];
  facadeOptions: string[];
  fittingsOptions: string[];
}

export interface ProductFilters {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  color?: string;
  brand?: string;
  productType?: ProductType;
  search?: string;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

export type SortOption = "newest" | "price_asc" | "price_desc" | "rating" | "popular";

// ============================================================
// Category Types
// ============================================================

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  parentId: string | null;
  children: Category[];
  productCount?: number;
}

// ============================================================
// Cart Types
// ============================================================

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  slug: string;
}

export interface CartState {
  items: CartItem[];
  promoCode: string | null;
  discount: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setPromoCode: (code: string | null, discount: number) => void;
  getTotal: () => number;
  getItemCount: () => number;
}

// ============================================================
// Order Types
// ============================================================

export type OrderStatus = "PENDING" | "MEASUREMENT" | "DESIGN_APPROVAL" | "PRODUCTION" | "ASSEMBLY" | "COMPLETED" | "CANCELLED";

export interface Order {
  id: string;
  userId: string | null;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment: string | null;
  deliveryMethod: string | null;
  paymentMethod: string | null;
  promoCode: string | null;
  discount: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface CreateOrderData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment?: string;
  deliveryMethod?: string;
  paymentMethod?: string;
  promoCode?: string;
}

// ============================================================
// Auth Types
// ============================================================

export type UserRole = "CUSTOMER" | "ADMIN" | "MANAGER";

export interface User {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: UserRole;
  avatar: string | null;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  error?: string;
}

// ============================================================
// Review Types
// ============================================================

export interface Review {
  id: string;
  rating: number;
  text: string | null;
  images: string[];
  author: {
    id: string;
    name: string | null;
    avatar: string | null;
  };
  productId: string;
  createdAt: string;
}

// ============================================================
// API Response Types
// ============================================================

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  error: string;
  statusCode: number;
}