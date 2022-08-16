import useKeypress from "../hooks/useKeyPress";
import React from 'react'




function KeyFocus(props) {

  let x = 0
  let y = 0
  let id_focus = 0


  const { sortImages } = props



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
  })

  return (
    <React.Fragment />
  )
}

export default KeyFocus

