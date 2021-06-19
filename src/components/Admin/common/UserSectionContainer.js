import classNames from "classnames"

const UserSectionContainer = ({ children, className, noPadding }) => {
    return <div className={classNames("bg-white border focus-within:shadow-md transition-shadow", className, {
        "p-3": !noPadding
    })}>
        {children}
    </div>
}

export default UserSectionContainer