export const TextField = ({ label, id, ...props }) => {
    return (
        <fieldset className="space-y-2 mb-4 flex flex-col">
            <label htmlFor={id} className="font-medium text-slate-900">{label}</label>
            <input className="py-2 px-4 border border-slate-200 rounded-lg" id={id} {...props} />
        </fieldset>

    )
}