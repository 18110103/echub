import classNames from 'classnames'
import Loading from '../../common/Loading'

const Button = ({ loading, disabled, children, onClick, className, style, rounded, fullWidth }) => {
    return <button onClick={onClick} style={style}
        disabled={loading || disabled}
        className={classNames('py-2 px-3 text-white transition-colors font-medium shadow-md rounded-sm', className, {
            "w-full": fullWidth,
            "rounded-lg": rounded,
            "opacity-40 cursor-not-allowed": disabled || loading,
            "bg-blue-400": disabled,
            "bg-blue-500 hover:bg-blue-600": !disabled
        })}>
        {loading
            ? <Loading />
            : children
        }
    </button>
}

export default Button