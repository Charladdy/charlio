import Item from '@/components/jakes-cakes/Item'
import { products, wedding_cakes, bday_cakes, grad_cakes } from '@/lib/jakes-cakes/products'
import './page-styles.css'

export default function Page() {
    return (
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-2 font-[fraunces-variable] text-[var(--burgundy)]">Shop Our Cakes</h1>
            <p className="mb-8 max-w-2xl">Browse what's on offer, pick a quantity, and add your favorites to the cart. Everything here is baked fresh for this demo &mdash; and nowhere else.</p>
            <a href="#everyday-cakes"><h2 className="text-2xl font-medium mb-2 font-[fraunces-variable] text-[var(--burgundy)]">Cakes for any Occasion</h2></a>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        imageAlt={product.imageAlt}
                        accent={product.accent}
                    />
                ))}
            </div>
            <h2 id="wedding-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">Wedding Cakes</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wedding_cakes.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        imageAlt={product.imageAlt}
                        accent={product.accent}
                    />
                ))}
            </div>
            <h2 id="bday-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">Birthday Cakes</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bday_cakes.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        imageAlt={product.imageAlt}
                        accent={product.accent}
                    />
                ))}
            </div>
            <h2 id="grad-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">Graduation Cakes</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grad_cakes.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        imageAlt={product.imageAlt}
                        accent={product.accent}
                    />
                ))}
            </div>            
        </div>
    );
}
