interface HighlightInterface {
  text: string
  highlight: string
}

export default function Highlight({text, highlight}: HighlightInterface) {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="font-bold">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}
