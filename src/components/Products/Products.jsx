import React, { useEffect, useState } from 'react';
import './Products.scss';

function Products() {
    const [dataProduct, setDataProduct] = useState([]);

    async function getProducts() {
        await fetch('https://script.google.com/macros/s/AKfycbzrs-LOEDLA3IJeZc_j_FXasSXlz4PpcR19RJvZ/exec')
            .then(response => response.json())
            .then((products) => {
                setDataProduct(products);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section id='productos' className='products'>
            <div className="products__title"><h4>PRODUCTOS</h4></div>
            <div className="card">
                {dataProduct.map((product) => (
                    <article key={product.id} className="card__container" style={{ backgroundImage: `url('${product.imagen}')` }}>
                        <div className="product-tag">{product.nombre} - ${product.precio}</div>
                        <div class="capa">
                            <h2 class="text-white center-text pt-4 text-uppercase">{product.nombre}</h2>
                            <p class="pt-2">{product.descripcion}</p>
                            <button class="btn-cart">AÑADIR AL CARRITO</button>
                            {product.link !== 'no' && <a target="_blank" href={product.link}><button class="btn-cart btn-cart--ml">VER EN MERCADO LIBRE</button></a>}
                        </div>
                    </article>
                ))
                }
            </div>
        </section>
    );
}

export default Products;