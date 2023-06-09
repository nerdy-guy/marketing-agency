import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="link" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="Facebook"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
  </ButtonGroup>
);
