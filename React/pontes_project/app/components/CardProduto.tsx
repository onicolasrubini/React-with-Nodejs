export default function CardProduto() {
    return (
        <div className ="w-64 bg-white rounded-lg shadow-md p-2">

            <div className="img-container bg-linear-to-b from-purple-500 rounded-md mb-2 p-2">
                <img src="https://png.pngtree.com/png-clipart/20250124/original/pngtree-nike-invincible-3-womens-road-running-shoes-png-image_20322860.png" alt="Produto" className="w-full h-40 object-cover rounded-md mb-4" />
            </div>
            

            <h2 className="text-lg font-semibold text-black mb-2">Nike Running Shoe</h2>



            <div className="mb-3">
                <span className="bg-white text-black px-3 py-1  text-sm font-medium border border-black rounded-2xl">New</span>
            </div>


            <p className="text-gray-600 mb-4">Crossing hardwood confort with off-court flair. '80s-inspired construction, bold details and nothin -but-net style..</p>
            
            <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-500">$ 79,99</span>
                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 cursor-pointer">Add to Cart</button>
            </div>

        </div>
    )
}