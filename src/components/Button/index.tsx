import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";

interface Props {
  text: string;
  children: React.ReactNode;
  link: string;
  className?: string; // Adiciona a propriedade className opcional
}

export function Button({ text, children, link, className }: Props) {
  const isPdf = link.endsWith('.pdf');

  const handleClick = () => {
    if (isPdf && link) {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = link.split('/').pop() || '';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  };

  return (
    <button
      onClick={isPdf ? handleClick : undefined}
      className={`bg-white font-bold w-11/12 h-16 rounded-2xl text-amber-950 ${className}`}
    >
      <a
        href={isPdf ? undefined : link} // Não define href se for PDF
        target={isPdf ? undefined : "_blank"} // Omitir target se for PDF
        rel={isPdf ? undefined : "noopener noreferrer"} // Apenas adicionar rel se for um link externo
        className="flex w-full h-full justify-between items-center px-5 gap-2 text-xl"
        onClick={isPdf ? (e) => e.preventDefault() : undefined} // Previne navegação se for PDF
      >
        <span className="flex items-center gap-3">
          {children} {text}
        </span>
        {isPdf ? (
          <DownloadSimple size={15} weight="bold" />
        ) : (
          <ArrowUpRight size={15} weight="bold" />
        )}
      </a>
    </button>
  );
}
