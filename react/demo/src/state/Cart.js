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

    function updateData(event) {
        var value = event.target.value  
        var name = event.target.name 
        setData({ ...data, [name] : value})
    }

    function addToCart(event) {
        event.preventDefault() // prevent form submission
        setCart([...cart, data])
    }

    return (
        <>
            <h1>Shooping Cart</h1>
            <form onSubmit={addToCart}>
                Product
                <select name="prodid" onChange={updateProduct}>
                    {products.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
                </select>
                &nbsp;
                Quantity : <input name="qty" type="number" 
                      style={{width :100}} onChange={updateQty} required />
                <p></p>
                <input type="submit" value="Add To Cart" />
            </form>
            <p></p>
            {cart.length > 0 && <ShowCart products={products} cart={cart} />}
        </>
    )
}

function ShowCart({ products, cart }) {
    var total = 0;
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
                    cart.map(item => {
                        var product = products[item.prodid]
                        var cartItem = {
                            title: product.name,
                            price: product.price,
                            qty: item.qty,
                            amount: product.price * item.qty
                        }
                        total += cartItem.amount;
                        return <ShowItem cartItem={cartItem} />
                    }
                    )
                }
                <ShowTotal total={total} />
            </tbody>
        </table>
    )
}

function ShowItem({ cartItem }) {
    return (
        <tr>
            <td>{cartItem.title}</td>
            <td> {cartItem.price}</td>
            <td> {cartItem.qty} </td>
            <td> {cartItem.amount} </td>
        </tr>
    )
}


function ShowTotal({ total }) {
    return (
        <tr>
            <td colspan="3"></td>
            <td>{total}</td>
        </tr>
    )

}