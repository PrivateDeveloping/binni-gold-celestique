import { useTranslation } from "react-i18next";

const LANG_OPTIONS = [
  { code: "en", label: "EN" },
  { code: "sq", label: "SQ" },
];

export function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <select
      aria-label="Select language"
      value={i18n.language}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      className="rounded-full border border-border bg-transparent px-2 py-1 text-xs font-semibold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      {LANG_OPTIONS.map((option) => (
        <option key={option.code} value={option.code} className="text-foreground">
          {option.label}
        </option>
      ))}
    </select>
  );
}
