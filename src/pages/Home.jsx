import { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation"
import MovieDetail from "./MovieDetail";

const Home = ({
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    popularMovies,
    popularSeries,
    featuredContent,
    setFeaturedContent,
    trending
}) => {


                
                
               
                const [showPlayer, setShowPlayer] = useState(false);
                const [watchlist, setWatchlist] = useState([]);

                const handlePlay = (content) => {
                    setFeaturedContent(content);
                    setShowPlayer(true);
                };
    
                const toggleWatchlist = (content) => {
                    if (watchlist.some(item => item.id === content.id)) {
                        setWatchlist(watchlist.filter(item => item.id !== content.id));
                    } else {
                        setWatchlist([...watchlist, content]);
                    }
                };
    
                const filteredContent = () => {
                    const content = activeTab === 'movies' ? popularMovies : popularSeries;
                    if (!searchQuery) return content;
                    
                    return content.filter(item => 
                        item.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                };
    
               


    return (

    <div className="min-h-screen flex flex-col">
                   <Navigation  
                   active={activeTab} 
                   setActiveTab={setActiveTab}
                   searchQuery={searchQuery}
                   setSearch={setSearchQuery} />

                    {/* Hero Section */}
                    {!showPlayer && featuredContent && (
                        <div 
                            className="relative h-screen w-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url(${featuredContent.backdropUrl})` }}
                        >
                            <div className="hero-gradient absolute inset-0"></div>
                            <div className="relative z-10 px-16 max-w-2xl">
                                <h1 className="text-5xl font-bold mb-4">{featuredContent.title}</h1>
                                <div className="flex space-x-4 mb-6">
                                    {featuredContent.genres.map((genre, index) => (
                                        <span key={index} className="genre-pill bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-8">{featuredContent.description}</p>
                                <div className="flex space-x-4">
                                    <button 
                                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium flex items-center"
                                        onClick={() => handlePlay(featuredContent)}
                                    >
                                        <i className="fas fa-play mr-2"></i> Play Now
                                    </button>
                                    <button 
                                        className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md font-medium flex items-center watchlist-btn relative"
                                        onClick={() => toggleWatchlist(featuredContent)}
                                    >
                                        {watchlist.some(item => item.id === featuredContent.id) ? (
                                            <i className="fas fa-check mr-2"></i>
                                        ) : (
                                            <i className="fas fa-plus mr-2"></i>
                                        )}
                                        Watchlist
                                        <span className="tooltip absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity">
                                            {watchlist.some(item => item.id === featuredContent.id) ? 'Remove from watchlist' : 'Add to watchlist'}
                                        </span>
                                    </button>
                                </div>
                                <div className="mt-6 flex space-x-6 text-gray-300">
                                    <span><i className="fas fa-star text-yellow-400 mr-1"></i> 8.7/10</span>
                                    <span>{featuredContent.year}</span>
                                    <span>{featuredContent.rating}</span>
                                    <span>{featuredContent.duration}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <MovieDetail
                     showPlayer={showPlayer}
                     setShowPlayer={setShowPlayer}
                     featuredContent={featuredContent}
                    />

                    {/* Main Content */}
                    {!showPlayer && (
                        <div className="container mx-auto px-6 py-16 mt-4">
                            {/* Trending Now */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {trending.map((item) => (
                                        <div 
                                            key={item.id} 
                                            className="content-card relative group rounded-lg overflow-hidden cursor-pointer"
                                            onClick={() => handlePlay(item)}
                                        >
                                            <img 
                                                src={item.imageUrl} 
                                                alt={item.title} 
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-red-600 text-white p-3 rounded-full">
                                                    <i className="fas fa-play"></i>
                                                </button>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <div className="flex justify-between text-sm text-gray-400">
                                                    <span>{item.year}</span>
                                                    <span>{item.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Popular Movies/TV Shows */}
                            <section className="mb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">
                                        Popular {activeTab === 'movies' ? 'Movies' : 'TV Shows'}
                                    </h2>
                                    <div className="flex space-x-2">
                                        <button 
                                            className={`px-4 py-1 rounded-full ${activeTab === 'movies' ? 'bg-red-600' : 'bg-gray-800'}`}
                                            onClick={() => setActiveTab('movies')}
                                        >
                                            Movies
                                        </button>
                                        <button 
                                            className={`px-4 py-1 rounded-full ${activeTab === 'series' ? 'bg-red-600' : 'bg-gray-800'}`}
                                            onClick={() => setActiveTab('series')}
                                        >
                                            TV Shows
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {filteredContent().map((item) => (
                                        <div 
                                            key={item.id} 
                                            className="content-card relative group rounded-lg overflow-hidden cursor-pointer"
                                            onClick={() => handlePlay(item)}
                                        >
                                            <img 
                                                src={item.imageUrl} 
                                                alt={item.title} 
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-red-600 text-white p-3 rounded-full">
                                                    <i className="fas fa-play"></i>
                                                </button>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <div className="flex justify-between text-sm text-gray-400">
                                                    <span>{item.year}</span>
                                                    <span>{item.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Genres */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance', 'Documentary', 'Animation', 'Crime', 'Fantasy', 'Adventure'].map((genre) => (
                                        <div 
                                            key={genre} 
                                            className="genre-pill bg-gray-800 hover:bg-red-600 text-white px-4 py-3 rounded-md text-center cursor-pointer transition-colors"
                                        >
                                            {genre}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}

                   <Footer />
                </div>
                )
}


export default Home;