export function CodeIcon({ className }: Readonly<{ className?: string }>) {
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
      <path d="M7 8l-4 4l4 4"></path>
      <path d="M17 8l4 4l-4 4"></path>
      <path d="M14 4l-4 16"></path>
    </svg>
  );
}
