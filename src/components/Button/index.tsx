import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react"

interface Props {
    text: string
    children: React.ReactNode
    link: string,
    className?: string // Adiciona a propriedade className opcional
}
export function Button ({text, children, link, className}: Props){
    const isPdf = link.endsWith('.pdf');

  const handleClick = () => {
    if (isPdf) {
        const linkElement = document.createElement('a');
        if (link) {
            linkElement.href = link;
            linkElement.download = link.split('/').pop() || '';
        }
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  };

    return ( 
        <>
            <button onClick={isPdf ? handleClick : undefined} className={`bg-white font-bold w-11/12 h-16 rounded-2xl text-amber-950 ${className}`}>
                <a href={isPdf ? "#" : link} target={isPdf ? "" : "_blank"} 
                className="flex w-full h-full flex justify-between items-center px-5 gap-2 text-xl">
                    <span className="flex items-center gap-3">{children} {text}</span> 
                    {isPdf ? (<DownloadSimple size={15} weight="bold"/>)  :(<ArrowUpRight size={15} weight="bold"/>) }</a>
            </button>
        </>
    )
}