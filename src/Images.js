import React from 'react';

const Images = (props) => {
    console.log('YOUR IMAGES: ', props);
	// Map through images
    let atlImages = props.imageGallery.map((image, i) => {
        return(
            <img src={image} key={i} alt='' />
        )
    })
    // console.log('STILL GOT IT: ', atlImages);
    return (
        <div className='images'>
            {atlImages}
        </div>
    )
}

export default Images;