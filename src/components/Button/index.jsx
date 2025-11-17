export const Button = ({children,...props}) => {
    return (
        <button className="px-6 py-2.5 cursor-pointer bg-blue-800 text-neutral-50 rounded-lg hover:bg-blue-700 transition-colors font-medium" {...props}>
            {children}
        </button>
    )
}