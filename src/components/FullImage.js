import React, { Suspense } from 'react';
import '../App.css';
import { Zoom } from "react-awesome-reveal";


function FullImage(props) {

    let img_id = 0
    let sectionId = 0
    setTimeout(() => {
        document.getElementById("0").focus();

    }, 2000);

    return (
        <React.Fragment>

            {props.sortimages.map((item) => {
                return <div className={'card_image section_' + sectionId++}>
                    {
                        item.map((data) => {

                            return <Zoom fraction={0.4}>
                                <Suspense fallback={<div>Loading...</div>} >
                                    <img id={img_id++} tabIndex={1}
                                        key={data.id} src={'https://farm' + data.farm + '.staticflickr.com/' + data.server + '/' + data.id + '_' + data.secret + '.jpg'}></img>
                                </Suspense>
                            </Zoom>

                        })
                    }
                </div>

            })}

        </React.Fragment>)



}

export default FullImage
