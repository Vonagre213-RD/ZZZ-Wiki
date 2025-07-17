// interface props {
//     setNameFilter: React.Dispatch<React.SetStateAction<string>>
//     setFactionFilter: React.Dispatch<React.SetStateAction<string>>
// }
// { setNameFilter, setFactionFilter }: props
//     const [isOpen, setIsOpen] = useState<boolean>(false)
//     const routes = [
//         { name: 'home', path: "/" }, { name: 'favorites', path: "Favorites" }]

interface props {
  isOpen: boolean;
  children: React.ReactNode;
}
export default function BurguerMenu({ isOpen, children }: props) {
  return (
    <div
      className={`
            w-full  transition-all duration-700 flex flex-col
             lg:flex-row lg:justify-center lg:items-center
             lg:h-auto overflow-hidden lg:max-h-[500px]
            ${isOpen ? "max-h-[750px]" : "max-h-0"}
        `}
    >
      {children}
    </div>
  );
}
