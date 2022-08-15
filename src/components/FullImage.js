import React, { Suspense } from 'react';
import '../App.css';
// import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Zoom } from "react-awesome-reveal";


function FullImage(props) {

    let img_id = 0
    let sectionId = 0


    return (
        <React.Fragment>

            {props.sortImages.map((item) => {
                return <div className={'card_image section_' + sectionId++}>
                    {
                        item.map((data) => {

                            return <Suspense fallback={<div>Loading...</div>} >
                                <img className='image' id={img_id++} tabIndex={1}
                                    key={data.id} src={'https://farm' + data.farm + '.staticflickr.com/' + data.server + '/' + data.id + '_' + data.secret + '.jpg'}></img>
                            </Suspense>

                        })
                    }
                </div>

            })}

        </React.Fragment>)



}

export default FullImage
