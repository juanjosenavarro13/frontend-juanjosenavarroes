import { FEATURES_FLAGS } from "@/core/constants/feature-flags";
import { useEffect, useState } from "react";
import { Message, SendMessage } from "./components";
import { useTranslation } from "react-i18next";

export function Chat() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const { t } = useTranslation("portfolio");

  useEffect(() => {
    if (chatOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [chatOpen]);

  if (!FEATURES_FLAGS.chat) return null;

  return (
    <>
      <button
        className="fixed bottom-5 left-5 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => {
          setChatOpen(true);
        }}
        type="button"
      >
        {t("openChat")}
      </button>
      <dialog
        open={chatOpen}
        className="fixed z-50 h-full  w-full overflow-hidden px-10 pt-16 lg:px-40 lg:pt-10"
      >
        <button
          onClick={() => {
            setChatOpen(false);
          }}
          className="absolute right-5 top-5 cursor-pointer text-3xl"
        >
          X
        </button>
        <div className="rounded bg-gray-100 p-3">
          <Message isUser text="hola user" />
          <Message isUser={false} text="hola no user" />
          <SendMessage />
        </div>
      </dialog>
    </>
  );
}
