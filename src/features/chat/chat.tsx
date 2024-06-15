import { FEATURES_FLAGS } from "@/core/constants/feature-flags";
import { Modal } from "../modal";

export function Chat() {
  if (!FEATURES_FLAGS.chat) return null;
  return (
    <Modal open={true}>
      <div className="flex h-min flex-col bg-gray-100">
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div className="rounded bg-white p-4 shadow">mensaje1</div>
            <div className="rounded bg-white p-4 shadow">mensaje2</div>
            <div className="rounded bg-white p-4 shadow">mensaje3</div>
            <div className="rounded bg-white p-4 shadow">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              saepe sequi, consectetur id, corrupti architecto quos accusantium
              itaque repudiandae reprehenderit pariatur delectus nisi! Officiis
              saepe quia animi, asperiores tenetur maiores. Et est minima
              distinctio sequi soluta culpa minus tempore saepe alias, nam qui?
              Amet eaque totam hic illo, unde voluptate, doloribus sapiente,
              perspiciatis est reiciendis placeat ratione! Ipsam, iure sint?
            </div>
          </div>
        </div>
        <div className="border-t bg-white p-4">
          <div className="flex">
            <input
              type="text"
              className="flex-1 rounded-l border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value="mensaje"
            />
            <button className="rounded-r bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
