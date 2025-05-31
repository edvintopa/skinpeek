function SearchBar({ query, setQuery, onSearch }) {

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            onSearch();
        }
    }

    return (
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <input
                type="text"
                placeholder="Search a player..."
                className="input input-bordered"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors" onClick={onSearch} >
                Search
            </button>
        </div>
    );
}


export default SearchBar;