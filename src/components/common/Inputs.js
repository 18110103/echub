import classNames from "classnames"

const Label = ({ name, children, className, ...props }) => (
    <label className={classNames('text-sm font-medium text-gray-600', className)}
        for={name} {...props}>
        {children}
    </label>
)
const Input = ({ name, placeholder, onChange, value, type }) => (
    <input id={name || ""} name={name || ""} placeholder={placeholder}
        onChange={onChange || null} value={value} type={type || "text"}
        className="input bg-user p-2 rounded-xl text-sm w-full" />
)

const LabelInput = ({ inline, name, label, placeholder, onChange, value, type }) => (
    <div className={`${inline ? " flex" : ""}`}>
        <div className="mb-2">
            <Label name={name}>
                {label}
            </Label>
        </div>
        <div>
            <Input id={name} name={name} placeholder={placeholder}
                onChange={onChange} value={value} type={type} />
        </div>
    </div>
)

const FloatingLabelInput = (props) => {
    <div className="text-gray-600 text-sm">
        <div className="mb-2">
            <label className="text-sm font-medium"
                for={props?.name}>
                {props?.label}
            </label>
        </div>
        <div>
            <input id={props?.name} name={props?.name} placeholder={props?.placeholder}
                className="bg-gray-50 py-2 px-3 border rounded-lg
            focus:outline-none focus:border-blue-500 w-full" />
        </div>
    </div>
}

export { Input, LabelInput, FloatingLabelInput, Label }