import { useState } from "react";

const Navigation = (
{
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery
}
) => {
    
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };


    return (     <>

         {/* Navigation */}
         <nav className="navbar fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
         <div className="flex items-center space-x-8">
             <h1 className="text-red-600 font-bold text-3xl">STREAMFLIX</h1>
             <div className="hidden md:flex space-x-6">
                 <button 
                     className={`${activeTab === 'movies' ? 'text-white font-semibold' : 'text-gray-300'} hover:text-white`}
                     onClick={() => setActiveTab('movies')}
                 >
                     Movies
                 </button>
                 <button 
                     className={`${activeTab === 'series' ? 'text-white font-semibold' : 'text-gray-300'} hover:text-white`}
                     onClick={() => setActiveTab('series')}
                 >
                     TV Shows
                 </button>
                 <button className="text-gray-300 hover:text-white">My Watchlist</button>
             </div>
         </div>
         <div className="flex items-center space-x-4">
             <div className="relative hidden md:block">
                 <input
                     type="text"
                     placeholder="Search..."
                     className="bg-gray-800 text-white px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
             </div>
             <button 
                 className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-medium"
                 onClick={toggleLogin}
             >
                 {isLoggedIn ? 'Logout' : 'Sign In'}
             </button>
         </div>
     </nav>
    </>
    )
}

export default Navigation;