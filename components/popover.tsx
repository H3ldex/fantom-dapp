import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box
} from "@chakra-ui/react";

type popovervars = {
  buttonName: string;
  headerName: string;
  text: string;
  left: string;
  right: string;
};

const Popovercomp = (props: popovervars) => {
  return (
    <Box mb="12px" mt="12px" mr={props.left} ml={props.right}> 
      <Popover>
        <PopoverTrigger>
          <Button textColor={"black"}> {props.buttonName}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textColor={"black"}>{props.headerName}</PopoverHeader>
          <PopoverBody textColor={"black"}>{props.text}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
export default Popovercomp;
