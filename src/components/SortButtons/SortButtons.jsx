function SortButtons({ sortOrder, onChange }) {
  return (
    <div className="flex gap-2">
      <button
        className={`px-4 py-2 border rounded transition-colors ${
          sortOrder === "asc"
            ? "bg-blue-100 border-blue-600 text-blue-600"
            : "border-gray-300 text-gray-700"
        }`}
        onClick={() => onChange("asc")}
      >
        A–Ö
      </button>
      <button
        className={`px-4 py-2 border rounded transition-colors ${
          sortOrder === "desc"
            ? "bg-blue-100 border-blue-600 text-blue-600"
            : "border-gray-300 text-gray-700"
        }`}
        onClick={() => onChange("desc")}
      >
        Ö–A
      </button>
    </div>
  );
}

export default SortButtons;
