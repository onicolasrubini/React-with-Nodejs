type Prop = {
        label: string,
        placeholder: string,
        type: string
}
export default function InputForm ({ label, placeholder, type }: Prop) {
    return (

    <>
          <div className="text-black p-1 mt-4">
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} className=" text-black border p-1 rounded w-full"/>
          </div>
    </>

  )
}
