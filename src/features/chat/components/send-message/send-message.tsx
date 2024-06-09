import { useState } from "react";
import { useTranslation } from "react-i18next";

export function SendMessage() {
  const [message, setMessage] = useState<string>("");
  const { t } = useTranslation("portfolio");

  const handleSendMessage = () => {
    console.log("enviar", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col p-3 sm:flex-row">
      <input
        type="text"
        className="w-full rounded-t-lg border p-2 sm:rounded-l-lg sm:rounded-tr-none"
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder={t("placeholderSendMessageChat")}
      />
      <button
        onClick={() => {
          handleSendMessage();
        }}
        className="w-full rounded-b-lg bg-blue-500 p-2 text-white sm:w-40 sm:rounded-r-lg sm:rounded-bl-none"
      >
        {t("sendMessageChat")}
      </button>
    </div>
  );
}
