import { ArrowUpRight } from "@phosphor-icons/react"

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
                <a href={link} target="_blank" className="flex w-full h-full flex justify-between items-center px-5 gap-2 text-xl"><span className="flex items-center gap-3">{children} {text}</span> <ArrowUpRight size={15} weight="bold"/></a>
            </button>
        </>
    )
}