import classNames from "classnames"

const Input = ({ className, ...inputProps }) => {
    return (
        <input className={classNames("", className)}
            {...inputProps}
        />
    )
}

export { Input }