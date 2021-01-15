import React, { useEffect, useState }from 'react';
import './App.css';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/Featured/FeaturedMovie';
import Header from './components/Header/Header';


export default() => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    const loadAll = async() => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Get aleatory featured 
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen]; 
      
      //More info about series
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
     
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const  scrollListener = () => {
      if(window.scrollY > 20){
        setHeaderBackground(true);
      }else{
        setHeaderBackground(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header headerBlackground={headerBackground}/>

      {featuredData &&
         <FeaturedMovie item={featuredData} />
      }
     
      <section className="lists">
        {movieList.map ((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
