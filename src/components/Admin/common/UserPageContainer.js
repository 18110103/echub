import classNames from "classnames"

const UserPageContainer = ({ className, children }) => {
    return (
        <div className={classNames('p-10 container', className)}>
            {children}
        </div>
    )
}

export default UserPageContainer