import { Image } from "@chakra-ui/react";

type imageProps = {
  url: string;
  altname: string;
};

const GalleryImage = (props: imageProps) => {
  return (
    <Image
      boxSize={{base: "80px", md: "180px"}}
      display="inline-block"
      objectFit={"cover"}
      src={props.url}
      alt={props.altname}
      padding="5px"
      height="100%"
      max-width="auto"
    />
  );
};
export default GalleryImage;
