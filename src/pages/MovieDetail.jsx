
const MovieDetail = ({
    showPlayer,
    setShowPlayer,
    featuredContent
}) => {



    return (
        <>
        {showPlayer && (
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Now Playing: {featuredContent.title}</h2>
                        <div className="w-full max-w-4xl h-96 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                            <i className="fas fa-play-circle text-6xl text-red-600"></i>
                        </div>
                        <div className="player-controls absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-8">
                            <button className="text-white hover:text-red-600">
                                <i className="fas fa-backward text-2xl"></i>
                            </button>
                            <button className="text-white hover:text-red-600">
                                <i className="fas fa-pause text-3xl"></i>
                            </button>
                            <button className="text-white hover:text-red-600">
                                <i className="fas fa-forward text-2xl"></i>
                            </button>
                            <button 
                                className="text-white hover:text-red-600 ml-8"
                                onClick={() => setShowPlayer(false)}
                            >
                                <i className="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
   </> )
}

export default MovieDetail;