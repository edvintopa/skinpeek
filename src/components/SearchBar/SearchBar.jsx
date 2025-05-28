function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Sök spelare..."
                className="input input-bordered"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors" onClick={onSearch}>
                Sök
            </button>
        </div>
    );
}

export default SearchBar;