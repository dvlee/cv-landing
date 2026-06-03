import { IconDownload } from "./icons";

export default function PrintButton({
  className = "",
  label = "Скачать PDF",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="/resume.pdf"
      download="Ли Денис Витальевич.pdf"
      className={className}
    >
      <IconDownload className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}
