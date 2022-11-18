import React, { useState } from 'react'

export default function Cart() {
    var products = [
        { id: 0, name: "Logitech Mouse", price: 10000 },
        { id: 1, name: "Seagate 2TB External Drive", price: 5000 },
        { id: 2, name: "Bose Headphones", price: 24000 }
    ];

    var [data, setData] = useState({ prodid: 0, qty: 1 })
    var [cart, setCart] = useState([])

    function updateQty(event) {
        var qty = event.target.value  // qty entered in textbox
        setData({ ...data, qty: qty })
    }

    function updateProduct(event) {
        var id = event.target.value  // get id of selected product 
        setData({ ...data, prodid: id })
    }

    function addToCart(event) {
        event.preventDefault() // prevent form submission
        setCart([...cart, data])
    }

    return (
        <>
            <h1>Shooping Cart</h1>
            <form>
                Product
                <select id="products" onChange={updateProduct}>
                    {products.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
                </select>
                Quantity : <input type="number" onChange={updateQty} required />
                <p></p>
                <input type="submit" onClick={addToCart} value="Add To Cart" />
            </form>
            <p></p>
            {cart.length > 0 && <ShowCart  products={products}  cart={cart} />}
        </>
    )
}

function ShowCart({products, cart}) {
    return (
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map(item => <Item products={products} item={item} />)
            }
        </tbody>
    </table>
    )
}

function Item({ products, item }) {
    var product = products[item.prodid]
    return (
        <tr>
            <td>
                {product.name}
            </td>
            <td> {product.price}</td>
            <td> {item.qty} </td>
            <td> {product.price * item.qty} </td>
        </tr>
    )
}