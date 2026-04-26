import { useEffect } from "react";

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Sanket & Bhagyashree`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);
}
