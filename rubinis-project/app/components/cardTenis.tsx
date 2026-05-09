export default function CardTenis() {
    return(
        <>
            <div className="h-130 w-90 flex flex-col items-center justify-center bg-linear-to-b from-purple-500 rounded-lg">
                <img src="https://png.pngtree.com/png-vector/20250129/ourmid/pngtree-trendy-nike-dunk-low-shoes-comfortable-top-sneakers-png-image_15363998.png" 
                alt="img" className=" w-70 justify-center items-center"/>
                
                <div className=" h-80 w-90 bg-amber-50 rounded-lg p-2">
                    <h2 className="font-semibold text-2xl text-black">Tênis Nike Dunk Low</h2>
                    <div className="mb-3 gap-1.5 flex">
                        <span className="text-xs text-black p-1 rounded border border-black">EU40</span>
                        <span className="text-xs text-black p-1 rounded border border-black">White/Black</span>
                    </div>
                    <p className="text-sm text-gray-700 p-2">The Nike Dunk Low is an iconic sneaker that combines style and comfort. With its classic and versatile design, it's ideal for events and everyday wear.</p>

                    <div className="p-2.5 mt-3 items-center flex justify-between">
                        <div className="flex flex-col">
                            <p className="text-xs text-gray-500">Price</p>
                            <p className="text-2xl font-bold text-gray-900">$79,90</p>
                        </div>
                        <button className="bg-purple-700 text-white py-2 px-10 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
