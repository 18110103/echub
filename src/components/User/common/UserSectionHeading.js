const UserSectionHeading = ({ children, className }) => {
    return <h3 className={"mb-2 text-sm font-bold text-gray-700 border-b pb-2" + " " + className}>
        {children}
    </h3>
}

export default UserSectionHeading