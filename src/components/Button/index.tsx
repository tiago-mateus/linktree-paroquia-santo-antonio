interface Props {
    text: string
    children: React.ReactNode
    link: string
}
export function Button ({text, children, link}: Props){
    return ( 
        <>
            <button className='bg-white font-bold w-4/5 h-14 animate-fadeIn transition-opacity duration-1000 
            rounded text-amber-950 flex items-center justify-center gap-2'>
                {children}
                <a href={link} target="_blank">{text}</a>
            </button>
        </>
    )
}