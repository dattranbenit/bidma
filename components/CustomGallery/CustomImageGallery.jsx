import React from 'react';
import ImageGallery from 'react-image-gallery';

const CustomImageGallery = (props) => {
  const { galleryIndex, setGalleryIndex, showNav, imagesProduct } = props


  const handleChangeImage = (event, index) => {
    setGalleryIndex(index)
  }

  return (
    <div>
      <ImageGallery
        items={imagesProduct}
        autoPlay={false}
        showPlayButton={false}
        onThumbnailClick={handleChangeImage}
        startIndex={0}
        showNav={showNav}
      />
    </div>
  )

}

export default CustomImageGallery;