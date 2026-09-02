import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  noIndex?: boolean;
}

const upsertMeta = (
  attribute: "name" | "property",
  key: string,
  content: string
) => {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const Seo = ({ title, description, noIndex = false }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta(
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow"
    );
  }, [description, noIndex, title]);

  return null;
};

export default Seo;
