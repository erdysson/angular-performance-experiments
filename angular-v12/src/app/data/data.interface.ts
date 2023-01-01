export interface ServerResponse {
    limit: number;
    skip: number;
    total: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    discountPercentage: number;
    brand: string;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

export interface ProductListServerResponse extends ServerResponse {
    products: Product[];
}

export interface CartProduct extends Pick<Product, 'id' | 'price' | 'title'> {
    discountPercentage: number;
    discountedPrice: number;
    quantity: number;
    total: number;
}

export interface Cart {
    id: number;
    discountedTotal: number;
    total: number;
    totalProducts: number;
    totalQuantity: number;
    userId: number;
    products: CartProduct[];
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}

export interface Hair {
    color: string;
    type: string;
}

export interface User {
    address: Address;
    age: number;
    bank: Bank;
    birthDate: string;
    bloodGroup: string;
    company: Company;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: Hair;
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    weight: number;
}

export interface UserListServerResponse extends ServerResponse {
    users: User[];
}

export interface CartListServerResponse extends ServerResponse {
    carts: Cart[];
}

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
    userId: number;
}

export interface PostListServerResponse extends ServerResponse {
    posts: Post[];
}

export interface CommentUser {
    id: number;
    username: string;
}

export interface Comment {
    body: string;
    id: number;
    postId: number;
    user: CommentUser;
}

export interface CommentListServerResponse extends ServerResponse {
    comments: Comment[];
}

export interface Quote {
    quote: string;
    id: number;
    author: string;
}

export interface QuoteListServerResponse extends ServerResponse {
    quotes: Quote[];
}

export interface Todo {
    completed: boolean;
    id: number;
    userId: number;
    todo: string;
}

export interface TodoListServerResponse extends ServerResponse {
    todos: Todo[];
}
