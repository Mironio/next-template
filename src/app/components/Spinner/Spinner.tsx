import Image from "next/image"

export default function Spinner({className = ''}) {
  return (
    <Image

      priority
      src="/spinner.svg"
      alt="loading"
      className={`animate-spin ${className}`}
      width={24}
      height={24}
    />
  );
}
