export function Message({
  text,
  isUser,
}: Readonly<{ text: string; isUser: boolean }>) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`rounded-lg p-3 ${isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
      >
        {text}
      </div>
    </div>
  );
}
