import metaverse from './metaverse4.jpg';
import Image from 'next/image'
import EarnLearn from './earn.webp'
import DummyImage from './metaverse.jpeg'
export const MetaverseLayer = ({...props})=>{
    return (
        
        <Image {...props} src={metaverse} alt="metaverse" width="850" />
          
    )
}
export const EarnWhileLearn = ({...props})=>{
    return (
        <Image {...props} src={EarnLearn} alt="earn while you learn" width="850" />
    )
}
export const PostImage = (props:any)=>{
    const {src,alt}:any =props
    return <Image {...props} src={src} alt={alt} />
}