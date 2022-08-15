import useKeypress from "../hooks/useKeyPress";
import React from 'react'




function KeyFocus(props) {

  let x = 0
  let y = 0
  let id_focus = 0
  let currentIndex = +document.activeElement.tabIndex;
  let Cols = 5
  const rows_before_loading = 15

  const { fetchData, sortImages } = props


  const needLoadMore = (currentIndex) => {
    const limit = sortImages.length * 5 - rows_before_loading;
    return currentIndex >= limit;
  }

  useKeypress('ArrowRight', () => {
    x += 1
    if (sortImages[y][x] === undefined) {
      x -= 1
    }
    id_focus = sortImages[y][x].id_photo
    document.getElementById(`${id_focus}`).focus();

  });



  useKeypress('ArrowLeft', () => {
    x -= 1
    if (sortImages[y][x] === undefined) {
      x += 1
    }
    id_focus = sortImages[y][x].id_photo
    document.getElementById(`${id_focus}`).focus();

  })



  useKeypress('ArrowUp', () => {
    y -= 1
    if (sortImages[y] === undefined) {
      y += 1
    }
    id_focus = sortImages[y][x].id_photo
    document.getElementById(`${id_focus}`).focus();

  })


  useKeypress('ArrowDown', () => {
    y += 1
    if (sortImages[y] === undefined) {
      y -= 1
    }
    id_focus = sortImages[y][x].id_photo
    document.getElementById(`${id_focus}`).focus();
    currentIndex = Math.min(currentIndex + Cols, sortImages.length * Cols - 1);

    if (needLoadMore(currentIndex)) {
      fetchData()
    }
  })

  return (
    <React.Fragment />
  )
}

export default KeyFocus

