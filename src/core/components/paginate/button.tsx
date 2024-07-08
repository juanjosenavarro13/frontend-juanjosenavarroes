interface ButtonPageProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
export function Button(props: Readonly<ButtonPageProps>) {
  const { text, onClick, disabled } = props;
  return (
    <button
      className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900 disabled:bg-gray-600"
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
