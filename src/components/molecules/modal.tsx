interface props {
    children: React.ReactNode,
    isOpen: boolean,
    className?: string
}


export default function Modal({ children, isOpen, className }: props) {

    return (
        <section className={`
            fixed text-white z-20 h-screen w-screen bg-neutral-900/70 
            transition-all duration-500 inset-0
            ${className}
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>

            {children}
        </section>
    );
}