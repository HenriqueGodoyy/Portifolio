import { contacts } from "@/content/profile";

export function ContactLinks() {
  return (
    <ul className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
      {contacts.map((contact) => (
        <li key={contact.label} className="border-b border-line">
          <a
            href={contact.href}
            target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {contact.label}
            </span>
            <span className="truncate font-display text-xl transition-opacity group-hover:opacity-60 sm:text-2xl">
              {contact.value} ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
