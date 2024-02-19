interface ButtonInterface {
  className?: string
  onClick: () => void
  children: React.ReactNode
}

export default function Button({onClick, children, className = ''}: ButtonInterface) {
  return (
    <button className={`
    relative
     rounded-xl bg-gradient-to-b from-red-500 to-yellow-300 p-1
     ${className}`} onClick={onClick}>
      <div className="absolute -top-[5px] left-1/2 h-[10px] w-[40px] -translate-x-1/2 bg-black"></div>

      <div className="h-full w-full rounded-xl bg-white p-2">
      {children}
      </div>
    </button>
  );
}
