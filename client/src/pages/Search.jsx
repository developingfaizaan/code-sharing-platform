import { useState } from "react";
import { searchSnippet } from "../api";

import { PostCard, Loader } from "../components";

const Search = () => {
    const [search, setSearch] = useState("");
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await searchSnippet(search);
            
            if (data.error) return console.log(data.message);      

            setSnippets(data.snippets);
            setLoading(false);
      
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-16`}>
        <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:mt-4 mb-8 sm:mb-10">Search Snippet</h1>
        
        <form onSubmit={handleSearch}>
            <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-2 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="#4C5463" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="py-4 pl-12 pr-4 text-lg font-poppins font-medium text-white bg-black200 rounded-[6px] outline-none focus:outline-primary ease-out duration-200 w-full placeholder:normal placeholder:text-white400" placeholder="Search by name, description, tags, etc..." autoComplete="off" />
            </div>
        </form>

        <div>
            {search ? (loading && <Loader />): ""}

            {!loading && !snippets.length && (
                <h3 className="text-2xl sm:text-3xl font-semibold text-center my-20 sm:my-36">
                    No matching snippets to show! 
                </h3>
            )}
            <div className="mt-20 mb-3">
                {snippets && snippets.map((snippet) => ( <PostCard snippet={snippet} key={snippet._id} /> ))}
            </div>
        </div>
    </main>

  )
}

export default Search;