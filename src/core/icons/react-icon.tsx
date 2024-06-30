export function ReactIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(1 2) scale(.05696)"
      >
        <circle cx="269.5" cy="237.6" r="50.2" fill="#00d8ff"></circle>
        <g stroke="#00d8ff" strokeWidth="24">
          <path d="M270 136c67 0 129 9 177 26 56 19 91 49 91 76 0 28-37 59-98 79-46 16-107 24-170 24-66 0-128-8-175-24-59-20-94-52-94-79s33-56 89-76c47-16 112-26 180-26z"></path>
          <path d="M181 187c33-58 73-108 111-141C337 7 380-8 403 5c25 14 33 62 20 125-9 47-33 104-65 159-32 57-70 107-107 140-47 41-92 56-116 42-23-13-32-57-21-115 9-50 33-110 67-169z"></path>
          <path d="M181 289c-34-58-57-117-66-166-12-59-4-104 19-117 25-14 70 2 119 45 36 32 73 80 105 136 33 57 58 114 67 162 12 62 3 108-21 122-23 13-65-1-110-39-38-33-79-84-113-143z"></path>
        </g>
      </g>
    </svg>
  );
}
