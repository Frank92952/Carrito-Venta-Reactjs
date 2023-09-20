import { MdAddShoppingCart } from "react-icons/md";

function Products({ products }) {
  return (
    <main className="p-5">
        <ul className="grid grid-cols-2 justify-center text-center gap-4 items-center ">
            { products.slice(0,12).map(product => (
                <li key={product.id} className="bg-black p-4">
                    <img   
                        src={product.thumbnail}
                        alt={product.title} 
                    className="w-full h-[200px]  border-4 border-red-500 "/>
                    <div className="text-white mt-5">
                        <strong >{product.title}</strong> - ${product.price}
                    </div>
                    <div className=" text-white mt-5  ">
                        <button className="p-2   rounded-xl">
                                <MdAddShoppingCart className="h-5 w-5" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Products