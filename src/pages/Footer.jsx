 
 const Footer = () => {

  return (
   <>
    {/* Footer */}
 <footer className="bg-gray-900 border-t border-gray-800 py-8">
 <div className="container mx-auto px-6">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         <div>
             <h3 className="text-xl font-bold mb-4">STREAMFLIX</h3>
             <p className="text-gray-400">The ultimate streaming platform for movies and TV shows.</p>
         </div>
         <div>
             <h4 className="font-semibold mb-4">Navigation</h4>
             <ul className="space-y-2 text-gray-400">
                 <li><a href="#" className="hover:text-white">Home</a></li>
                 <li><a href="#" className="hover:text-white">Movies</a></li>
                 <li><a href="#" className="hover:text-white">TV Shows</a></li>
                 <li><a href="#" className="hover:text-white">My Watchlist</a></li>
             </ul>
         </div>
         <div>
             <h4 className="font-semibold mb-4">Legal</h4>
             <ul className="space-y-2 text-gray-400">
                 <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
             </ul>
         </div>
         <div>
             <h4 className="font-semibold mb-4">Connect With Us</h4>
             <div className="flex space-x-4">
                 <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                 <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                 <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                 <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
             </div>
         </div>
     </div>
     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
         <p>&copy; {new Date().getFullYear()} StreamFlix. All rights reserved.</p>
     </div>
 </div>
</footer>
</>)
 }
 
 export default Footer
 