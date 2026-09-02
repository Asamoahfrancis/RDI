type FilterCategory =
  | "all"
  | "construction"
  | "media"
  | "solar"
  | "integrated";

interface PortfolioFilterProps {
  onFilterChange: (category: FilterCategory) => void;
  activeFilter: FilterCategory;
}

const PortfolioFilter = ({
  onFilterChange,
  activeFilter,
}: PortfolioFilterProps) => {
  const handleFilterClick = (category: FilterCategory) => {
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center mt-8 space-x-2 space-y-2 sm:space-y-0">
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeFilter === "all"
            ? "bg-[#1E293B] text-white"
            : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
        }`}
        onClick={() => handleFilterClick("all")}
      >
        All Projects
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeFilter === "construction"
            ? "bg-[#FFC107] text-white"
            : "bg-[#FFC107]/10 text-[#FFC107] hover:bg-[#FFC107] hover:text-white"
        }`}
        onClick={() => handleFilterClick("construction")}
      >
        Construction
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeFilter === "media"
            ? "bg-[#9C27B0] text-white"
            : "bg-[#9C27B0]/10 text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white"
        }`}
        onClick={() => handleFilterClick("media")}
      >
        Media
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeFilter === "solar"
            ? "bg-[#FBBF24] text-[#0F172A]"
            : "bg-emerald-50 text-[#047857] hover:bg-[#FBBF24] hover:text-[#0F172A]"
        }`}
        onClick={() => handleFilterClick("solar")}
      >
        Solar Technology
      </button>
      {/* <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeFilter === "integrated"
            ? "bg-gradient-to-r from-[#FFC107] to-[#9C27B0] text-white"
            : "bg-gradient-to-r from-[#FFC107]/10 to-[#9C27B0]/10 hover:from-[#FFC107] hover:to-[#9C27B0] hover:text-white"
        }`}
        onClick={() => handleFilterClick("integrated")}
      >
        Integrated
      </button> */}
    </div>
  );
};

export default PortfolioFilter;
