import {Image} from "@chakra-ui/react";

type imageProps = {
  url: string
  altname : string
  
}

const TeamImage = (props: imageProps) => {
   return (
    <Image
        padding='10px'
        boxSize="212px"
        src={props.url}
        alt={props.altname}
      />
 )
}
export default TeamImage