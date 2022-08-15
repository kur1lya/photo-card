import React, { Suspense } from 'react';
import '../App.css';


function Images(props) {

    let img_id = 0
    let section_id = 0
    let tabIndex = 0
    const { sortImages } = props

    return (
        <React.Fragment>
            {sortImages.map((data) => {
                return <div className={'card_image section_' + section_id++}>
                    {
                        data.map((item) => {
                            return <Suspense fallback={<div>Loading...</div>} >
                                <img alt='img' className='image' id={img_id++} tabIndex={tabIndex++}
                                    key={item.id} src={'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'}></img>
                            </Suspense>

                        })
                    }
                </div>
            })}
        </React.Fragment>)



}

export default Images
