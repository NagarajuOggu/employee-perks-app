import AddressForm from "../components/Address-form";

export interface EmployeePerks {
  title: string;
  logo: string;
  user: UserPerks;
}

export interface UserPerks {
  firstName: string;
  lastName: string;
  role: string;
  pointsPerMonth: number;
  address: Object;
  perks: Perks;
}

export interface Perks {
  [key: string]: {
    availablePoints: number;
    totalPoints: number;
  };
}

export interface Products {
  name: string;
  points: string;
  purchased_qty: number;
}

export interface PurchasedProduct {
  category: string;
  color: string;
  products: Products[];
}

export interface PurchasedProducts {
  [key: string]: PurchasedProduct;
}

export interface EPP {
  "purchased-products": PurchasedProducts;
}

export interface OrderDetails {
  user_ID: string;
  location: string;
  isAdminOverride: boolean;
  seatNumber: string;
  selectedMonth: string;
  totalPurchasedPoints: string;
  address: AddressForm;
  EPP: EPP;
}
