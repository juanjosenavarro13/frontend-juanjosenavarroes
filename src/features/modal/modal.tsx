export function Modal({
  children,
  open = false,
  onClose,
}: Readonly<{ children: JSX.Element; open?: boolean; onClose?: () => void }>) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
        <div className="p-8">
          <button
            data-testid="btnclose"
            onClick={() => {
              onClose && onClose();
            }}
            className="absolute right-0 top-0 mr-1 text-3xl text-gray-600 hover:text-gray-900"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
