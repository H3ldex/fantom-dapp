import { Image } from "@chakra-ui/react";

type imageProps = {
  url: string;
  altname: string;
  rotation: string;
};

const GalleryImage = (props: imageProps) => {
  return (
    <Image
      boxSize="250px"
      objectFit={"cover"}
      src={props.url}
      alt={props.altname}
      border="8px"
      borderRadius="lg"
      boxShadow="dark-lg"
      transform={props.rotation}
    />
  );
};
export default GalleryImage;
