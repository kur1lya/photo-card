import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images';
import KeyFocus from './components/KeyFocus';




function App() {

  const [images, setImages] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(50)
  const [sortImages, setSortImages] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    if (firstLoad) {
      fetchData().then(() => {
        document.getElementById("0").focus();
      })
      setNumberOfPages(40)
    }
    setFirstLoad(false)

  }, [])


  const fetchData = async () => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=b2f10795395cc5e3fba574d317f41d94&gallery_id=72157719572751649&per_page=${numberOfPages}&page=1&format=json&nojsoncallback=1`)
    const data = await response.json()
    setImages(data.photos.photo)
  }

  while (images.length !== 0) {
    const cut_photo = images.splice(0, 5)
    sortImages.push(cut_photo)
    let cuur_id_photo = 0;
    sortImages.forEach((n) => {
      n.forEach(element => {
        element.id_photo = cuur_id_photo++
      });
    })
  }

  return (

    <div className="App">
      <Images sortImages={sortImages} />
      <KeyFocus fetchData={fetchData} sortImages={sortImages} />
    </div>

  );
}

export default App;




