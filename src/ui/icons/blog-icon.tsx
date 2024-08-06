export function BlogIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2"></path>
      <path d="M8 4v16"></path>
      <path d="M16 4v16"></path>
      <path d="M4 8h16"></path>
      <path d="M4 16h16"></path>
      <path d="M10 8h4"></path>
      <path d="M10 16h4"></path>
    </svg>
  );
}
