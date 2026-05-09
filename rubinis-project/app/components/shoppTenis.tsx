import CardTenis from "./cardTenis";

export default function ShopTenis() {
    return (
        <>
          <div className="flex flex-col h-screen bg-black">
            <div className="flex-1 flex flex-col items-center justify-center">
                    <CardTenis/>
            </div>
          </div>
        </>
    )
}
