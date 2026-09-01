export function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="170"
      viewBox="0 0 120 170"
      aria-hidden="true"
    >
      <rect x="52" y="8" width="16" height="154" fill="#c8a96e" />
      <rect x="16" y="52" width="88" height="16" fill="#c8a96e" />
    </svg>
  );
}
