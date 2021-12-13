import React, { useEffect, useState } from 'react';
import './App.css';
import FullImage from './components/FullImage';
import KeyFocus from './components/KeyFocus';




function App() {

  const [images, setImages] = useState([])
  const [sortimages, setSortImages] = useState([])
  const [isFetching, setIsFetching] = useState(false);
  const [numberOfPages, setnumberOfPages] = useState(50)


  useEffect( () => {
    fetchData()
    setnumberOfPages(40)
    window.addEventListener('scroll', handleScroll);
   

  }, [])

  const fetchData = async () => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=b2f10795395cc5e3fba574d317f41d94&gallery_id=72157719572751649&per_page=${numberOfPages}&page=1&format=json&nojsoncallback=1`)
    const data = await response.json();

    setImages(data.photos.photo)
  }

  while (images.length !== 0) {
    let cut_photo = images.splice(0, 5)
    sortimages.push(cut_photo)
    let cuur_id_photo = 0;
    sortimages.forEach((n, i) => {
      n.forEach(element => {
        element.id_photo = cuur_id_photo++
      });
    })


  }



  const handleScroll = (e) => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
      isFetching
    )
      return
    setIsFetching(true);
    console.log(isFetching);
  };





  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();

  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };








  return (

    <div className="App">
      <FullImage sortimages={sortimages}></FullImage>
      <KeyFocus sortimages={sortimages}></KeyFocus>
    </div>

  );
}

export default App;




