interface ButtonPageProps {
  text: string;
  onClick: () => void;
}
export function Button(props: Readonly<ButtonPageProps>) {
  const { text, onClick } = props;
  return (
    <button
      className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
