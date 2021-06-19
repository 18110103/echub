const ProfileImage = ({ name }) => {
    return (
        <div className="w-full h-full flex items-center text-xl
        justify-center bg-blue-200 text-blue-600 font-semibold select-none">
            <span>{name.charAt(0)}</span>
        </div>
    )
}

export default ProfileImage