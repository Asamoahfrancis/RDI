import { ArrowRight } from "lucide-react";

export type PortfolioItemType = "construction" | "media" | "integrated";

interface PortfolioItemProps {
  type: PortfolioItemType;
  title: string;
  description: string;
  imageSrc: string;
  year: string;
  slug: string;
}

const PortfolioItem = ({
  type,
  title,
  description,
  imageSrc,
  year,
  slug,
}: PortfolioItemProps) => {
  const getBadgeStyles = () => {
    switch (type) {
      case "construction":
        return {
          bg: "bg-[#FFC107]/10",
          text: "text-[#FFC107]",
          link: "text-[#FFC107]",
        };
      case "media":
        return {
          bg: "bg-[#9C27B0]/10",
          text: "text-[#9C27B0]",
          link: "text-[#9C27B0]",
        };
      case "integrated":
        return {
          bg: "bg-gradient-to-r from-[#FFC107]/20 to-[#9C27B0]/20",
          text: "text-[#1E293B]",
          link: "text-[#1E293B]",
        };
    }
  };

  const styles = getBadgeStyles();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span
            className={`${styles.bg} ${styles.text} text-xs px-3 py-1 rounded-full font-medium`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          <span className="text-[#64748B] text-sm">{year}</span>
        </div>
        <h3 className="font-poppins font-semibold text-xl mb-2">{title}</h3>
        <p className="text-[#64748B] text-sm mb-4">{description}</p>
        <a
          href={`/portfolio/${slug}`}
          className={`${styles.link} font-medium hover:underline flex items-center`}
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
