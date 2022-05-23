import { Image } from "@chakra-ui/react";

type imageProps = {
  url: string;
  altname: string;
};

const GalleryImage = (props: imageProps) => {
  return (
    <Image
      boxSize="180px"
      display="inline-block"
      objectFit={"cover"}
      src={props.url}
      alt={props.altname}
      padding="5px"
      height="100%"
    />
  );
};
export default GalleryImage;
