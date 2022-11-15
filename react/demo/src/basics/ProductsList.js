import React from 'react'

export default function ProductsList(props) {
  return (
      <>
         <h2>Products List</h2>
         <table  className="table table-bordered">
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Discount</th>
                <th>NetPrice</th>
            </tr>
            {
                props.products.map( (prod, idx) =>
                        <DisplayProduct key={idx} product = {prod} />)
            }
         </table>
      </>
  )
}


function DisplayProduct(props) {
    var prod = props.product 
    var discount = prod.price * prod.disrate / 100
    var netprice = prod.price - discount 

    return (
        <tr>
            <td>{prod.title}</td>
            <td className="text-end">{prod.price}</td>
            <td className="text-end">{discount}</td>
            <td className="text-end">{netprice}</td>
        </tr>
        )
}