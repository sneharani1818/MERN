import { useEffect, useState } from "react"
import Card from "./Card";

const MyCard = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      const productInfo=fetch("https://dummyjson.com/products/category/smartphones")
      .then(result=>result.json())
      .then(data=>{
        setProducts(data.products)
      })
    },[]);//[] means only one time execution
  return (
    <div className="container m-4 d-flex flex-wrap">
        {products.map(product=>(
            <Card 
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            brand={product.brand}
            category={product.category}
            thumbnail={product.thumbnail}/>
        ))}
    </div>
  )
}

export default MyCard