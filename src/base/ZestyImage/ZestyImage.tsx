import React from 'react'
import { Image,ImageLoadEventData,ImageProps, ImageSource } from 'expo-image';


// interface IZestyImage extends ImageProps {
//     onLoadStart: (() => void);
    
// }

const ZestyImage = (props: ImageProps) => {
  return (
    <Image {...props} />
  )
}

export default ZestyImage