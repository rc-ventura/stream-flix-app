import './App.css';
import { useState, useEffect } from 'react';

import Home from './pages/Home'


const StreamFlixApp = () => {

  const [activeTab, setActiveTab] = useState('movies');
  const [searchQuery, setSearchQuery] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [featuredContent, setFeaturedContent] = useState(null);
  const [trending, setTrending] = useState([]);

            useEffect(() => {
                const fetchTrendingMovies = async () => {
                    try {
                        const response = await fetch(
                            'https://api.themoviedb.org/3/trending/movie/week?api_key=ce483451d3e1044f8ecfcb65ef14934b'
                          );
                          const trends = await response.json();
                          setTrending(trends.results); 
                        
                    } catch (error) {
                      console.error('Erro ao buscar filmes trending:', error);
                    }
                }
                fetchTrendingMovies()

                
              }, []);

              useEffect(() => {
                const fetchPopularMovies = async () => {
                    try {
                        const response = await fetch(
                            'https://api.themoviedb.org/3/trending/movie/week?api_key=ce483451d3e1044f8ecfcb65ef14934b'
                          );
                          const movies = await response.json();
                          setPopularMovies(movies.results); 
                          console.log(movies)
                    } catch (error) {
                      console.error('Erro ao buscar filmes trending:', error);
                    }
                }
                fetchPopularMovies()

                
              }, []);
            
              useEffect(() => {
                const fetchPopularSeries = async () => {
                    try {
                        const response = await fetch(
                            'https://api.themoviedb.org/3/trending/movie/week?api_key=ce483451d3e1044f8ecfcb65ef14934b'
                          );
                          const series = await response.json();
                          setPopularSeries(series.results); 
                        
                    } catch (error) {
                      console.error('Erro ao buscar filmes trending:', error);
                    }
                }
                fetchPopularSeries()

                
              }, []);


              useEffect(() => {
                const fetchFeaturedContent = async () => {
                    try {
                        const response = await fetch(
                            'https://api.themoviedb.org/3/trending/movie/week?api_key=ce483451d3e1044f8ecfcb65ef14934b'
                          );
                          const featuredContent = await response.json();
                          setFeaturedContent(featuredContent.results); 
                    
                    } catch (error) {
                      console.error('Erro ao buscar filmes trending:', error);
                    }
                }
                fetchFeaturedContent()

                
              }, []);
                // Mock data - in a real app, this would come from an API
                // const mockData = {
                //     featured: {
                //         id: 101,
                //         title: 'Stranger Things: Season 4',
                //         description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
                //         type: 'series',
                //         year: 2022,
                //         rating: 'TV-14',
                //         duration: '4 Seasons',
                //         genres: ['Sci-Fi', 'Horror', 'Drama'],
                //         imageUrl: 'https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
                //         backdropUrl: 'https://image.tmdb.org/t/p/original/bV8q7mx0QcQmFZNTkKfQtnNz1Xf.jpg'
                //     },
                //     trending: [
                //         {
                //             id: 201,
                //             title: 'The Mandalorian',
                //             type: 'series',
                //             year: 2023,
                //             rating: 'TV-PG',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg'
                //         },
                //         {
                //             id: 202,
                //             title: 'Avatar: The Way of Water',
                //             type: 'movie',
                //             year: 2022,
                //             rating: 'PG-13',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'
                //         },
                //         {
                //             id: 203,
                //             title: 'The Last of Us',
                //             type: 'series',
                //             year: 2023,
                //             rating: 'TV-MA',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
                //         },
                //         {
                //             id: 204,
                //             title: 'John Wick: Chapter 4',
                //             type: 'movie',
                //             year: 2023,
                //             rating: 'R',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'
                //         },
                //         {
                //             id: 205,
                //             title: 'Black Panther: Wakanda Forever',
                //             type: 'movie',
                //             year: 2022,
                //             rating: 'PG-13',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg'
                //         }
                //     ],
                //     movies: [
                //         {
                //             id: 301,
                //             title: 'Inception',
                //             year: 2010,
                //             rating: 'PG-13',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
                //         },
                //         {
                //             id: 302,
                //             title: 'The Dark Knight',
                //             year: 2008,
                //             rating: 'PG-13',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
                //         },
                //         {
                //             id: 303,
                //             title: 'Interstellar',
                //             year: 2014,
                //             rating: 'PG-13',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
                //         },
                //         {
                //             id: 304,
                //             title: 'Pulp Fiction',
                //             year: 1994,
                //             rating: 'R',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
                //         },
                //         {
                //             id: 305,
                //             title: 'The Shawshank Redemption',
                //             year: 1994,
                //             rating: 'R',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
                //         }
                //     ],
                //     series: [
                //         {
                //             id: 401,
                //             title: 'Breaking Bad',
                //             year: '2008-2013',
                //             rating: 'TV-MA',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
                //         },
                //         {
                //             id: 402,
                //             title: 'Game of Thrones',
                //             year: '2011-2019',
                //             rating: 'TV-MA',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'
                //         },
                //         {
                //             id: 403,
                //             title: 'The Crown',
                //             year: '2016-2023',
                //             rating: 'TV-MA',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/jEwIOirGw51LdTfJFOYzwNk83dZ.jpg'
                //         },
                //         {
                //             id: 404,
                //             title: 'Friends',
                //             year: '1994-2004',
                //             rating: 'TV-14',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEKTP.jpg'
                //         },
                //         {
                //             id: 405,
                //             title: 'The Office (US)',
                //             year: '2005-2013',
                //             rating: 'TV-14',
                //             imageUrl: 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gipSrG3F53qOQZJ.jpg'
                //         }
                //     ]
                // };

            

           
            return (
              <div>
                  <Home 
                  active={activeTab} 
                  setActiveTab={setActiveTab}
                  searchQuery={searchQuery}
                  setSearch={setSearchQuery}
                  popularMovies={popularMovies}
                  popularSeries={popularSeries}
                  featuredContent={featuredContent}
                  setFeaturedContent={setFeaturedContent}
                  trending={trending}
                  />
              </div>
                
            );
        };

    

export default StreamFlixApp;
