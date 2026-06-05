import { IconDownload } from "./icons";

export function PrintButton({
  className = "",
  label = "Скачать PDF",
  fileName = "Ли Денис Витальевич.pdf",
}: {
  className?: string;
  label?: string;
  fileName?: string;
}) {
  return (
    <a href="/resume.pdf" download={fileName} className={className}>
      <IconDownload className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}
