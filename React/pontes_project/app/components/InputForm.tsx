type Prop = {
    label :string
    placeholder : string
    type : string
}
export default function InputForm(props: Prop) {
    return (
        <div className= "w-full flex flex-col m-3">
            <label htmlFor="">{props.label}</label>
            <input
            type={props.type}
            placeholder={props.placeholder}
            className="border-2 rounded-sm p-1 border-gray-300
            focus:border-sky-500 focus:outline-blue-500"
            />
        </div>
    )
}