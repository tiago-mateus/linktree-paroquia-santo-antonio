interface Props {
    text: string
    children: React.ReactNode
    link: string
}
export function Button ({text, children, link}: Props){
    return ( 
        <>
            <button className='bg-white font-bold w-10/12 h-14 rounded-lg text-amber-950'>
                <a href={link} target="_blank" className="flex w-full h-full flex items-center justify-center gap-2 text-xl">{children} {text}</a>
            </button>
        </>
    )
}