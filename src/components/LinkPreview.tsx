import { useState, type ReactNode } from "react";

/** Shows a live screenshot of the target page when hovering the link. */
export function LinkPreview({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const shot = `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 block w-72 -translate-x-1/2 animate-in fade-in zoom-in-95 overflow-hidden rounded-xl border bg-card shadow-2xl">
          <span className="relative block aspect-[16/10] bg-muted">
            {!loaded && <span className="meta absolute inset-0 flex items-center justify-center text-muted-foreground">Loading preview…</span>}
            <img src={shot} alt={`Preview of ${href}`} onLoad={() => setLoaded(true)} className="h-full w-full object-cover object-top" />
          </span>
          <span className="meta block truncate px-3 py-2 text-muted-foreground">{href.replace(/^https?:\/\//, "")}</span>
        </span>
      )}
    </span>
  );
}
