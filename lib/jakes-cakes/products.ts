export type ProductAccent = 'rose' | 'plum' | 'green' | 'burgundy' | 'blush';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  imageAlt?: string;
  accent?: ProductAccent;
}

export const products: Product[] = [
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Our original rich, creamy cheesecake.',
    price: 24,
    image: '/jakes-cakes/cheesecake.png',
    imageAlt: 'Cheesecake',
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: 'Rich chocolate sponge with chocolate buttercream.',
    price: 24,
    image: '/jakes-cakes/chocolate_cake.png',
    imageAlt: 'Chocolate cake',
  },
  {
    id: 'chocolate-cheesecake',
    name: 'Chocolate Cheesecake',
    description: 'Our original cheesecake with a layer of dense chocolate ganache on top.',
    price: 26,
    image: '/jakes-cakes/chocolate_cheesecake.png',
    imageAlt: 'Chocolate Cheesecake',
  },
  {
    id: 'chocolate-tres-leches',
    name: 'Chocolate Tres Leches',
    description: 'Our soft, moist tres leches cake with a chocolately twist.',
    price: 32,
    image: '/jakes-cakes/chocolate_tres_leches.png',
    imageAlt: 'Chocolate Tres Leches Cake',
  },
  {
    id: 'confetti',
    name: 'Confetti Cake',
    description: 'Colorful, rich rainbow sponge with, buttercream sprinkled with confetti candy.',
    price: 32,
    image: '/jakes-cakes/confetti_cake.png',
    imageAlt: 'Confetti Cake',
  },
  {
    id: 'cookies-n-cream',
    name: 'Cookies \'n Cream',
    description: 'Vanilla and chocolate come together in an unforgettable creation.',
    price: 32,
    image: '/jakes-cakes/cookies_n_cream_cake.png',
    imageAlt: 'Cookies \'n Cream Cake',
  },
  {
    id: 'tres-leches',
    name: 'Tres Leches',
    description: 'Our soft, moist tres leches cake garnished with strawberries.',
    price: 28,
    image: '/jakes-cakes/tres_leches_cake.png',
    imageAlt: 'Tres Leches Cake',
  }, 
  {
    id: 'vanilla',
    name: 'Vanilla Cake',
    description: 'Soft vanilla sponge with buttercream frosting.',
    price: 28,
    image: '/jakes-cakes/vanilla_cake.png',
    imageAlt: 'Vanilla Cake',
  }, 
];

export const wedding_cakes: Product[] = [
  {
    id: 'wedding-chocolate',
    name: 'Wedding Tier - Chocolate',
    description: 'Three tiers of chocolate sponge and chocolate buttercream, finished with fresh florals.',
    price: 189,
    image: '/jakes-cakes/wedding_cake.png',
    imageAlt: 'Three-tier chocolate wedding cake',
  },
  {
    id: 'wedding-vanilla',
    name: 'Wedding Tier - Vanilla',
    description: 'Three tiers of vanilla sponge and buttercream, finished with fresh florals.',
    price: 189,
    image: '/jakes-cakes/vanilla_wedding_cake.png',
    imageAlt: 'Three-tier vanilla wedding cake',
  },
  {
    id: 'wedding-marble',
    name: 'Wedding Tier - Marble',
    description: 'Three tiers of marble sponge and buttercream, finished with fresh florals.',
    price: 189,
    image: '/jakes-cakes/marble_wedding_cake.png',
    imageAlt: 'Three-tier marble wedding cake',
  },
];

export const bday_cakes: Product[] = [  
  {
    id: 'birthday-chocolate',
    name: 'Chocolate Birthday Cake',
    description: 'Chocolate sponge layers with chocolate buttercream, ready for candles.',
    price: 54,
    image: '/jakes-cakes/chocolate_bday.png',
    imageAlt: 'Chocolate birthday cake',
  },
  {
    id: 'birthday-vanilla',
    name: 'Vanilla Birthday Cake',
    description: 'Rainbow sponge layers with buttercream, ready for candles.',
    price: 54,
    image: '/jakes-cakes/bday_cake.png',
    imageAlt: 'Colorful vanilla birthday cake',
  },
  {
    id: 'birthday-marble',
    name: 'Marble Birthday Cake',
    description: 'Vanilla and chocolate sponge layers with chocolate buttercream, ready for candles.',
    price: 54,
    image: '/jakes-cakes/marble_bday.png',
    imageAlt: 'Chocolate birthday cake',
  },
];

export const grad_cakes: Product[] = [
  {
    id: 'grad-chocolate',
    name: 'Chocolate Grad Cake',
    description: 'Chocolate sponge cake topped with a handcrafted fondant cap for the big day.',
    price: 62,
    image: '/jakes-cakes/chocolate_grad.png',
    imageAlt: 'Chocolate graduation-themed cake with a fondant cap',
  },
  {
    id: 'grad-vanilla',
    name: 'Vanilla Grad Cake',
    description: 'Vanilla sponge cake topped with a handcrafted fondant cap for the big day.',
    price: 62,
    image: '/jakes-cakes/grad_cake.png',
    imageAlt: 'Vanilla graduation-themed cake with a fondant cap',
  },
  {
    id: 'grad-marble',
    name: 'Marble Grad Cake',
    description: 'Vanilla and chocolate sponge cake topped with a handcrafted fondant cap for the big day.',
    price: 62,
    image: '/jakes-cakes/marble_grad.png',
    imageAlt: 'Marble graduation-themed cake with a fondant cap',
  },
];
