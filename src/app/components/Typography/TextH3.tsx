interface TextH3Interface {
  className?: string
  children: React.ReactNode

}

export default function TextH3({children, className = ''}: TextH3Interface) {
  return (
    <h3 className={`${className}`}>{children}</h3>
  );
}
