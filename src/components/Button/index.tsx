interface Props {
    text: string
    children: React.ReactNode
    link: string,
    className?: string // Adiciona a propriedade className opcional
}
export function Button ({text, children, link, className}: Props){
    return ( 
        <>
            <button className={`bg-white font-bold w-11/12 h-16 rounded-2xl text-amber-950 ${className}`}>
                <a href={link} target="_blank" className="flex w-full h-full flex items-center justify-center gap-2 text-xl">{children} {text}</a>
            </button>
        </>
    )
}