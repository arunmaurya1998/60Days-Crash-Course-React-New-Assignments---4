import { Heading, Center, Box, Image } from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Center h="100px">
        <Heading as="h1" size="4xl" noOfLines={7}>
          Contact Us
        </Heading>
      </Center>

      <Box paddingY={10} paddingX={20} fontSize="lg" color="Gray.500">
        We know that choosing the right institute or a career path can be a
        difficult and tiring process, and that's why we're here for you. Contact
        us to ask any questions, we'll respond over email as soon as possible!
      </Box>
      <Center h="100px" paddingY={5}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://masaischool.com/images/contact/mail.svg"
        alt="Masai"
      />
    </Center>
    <Center>
        <Heading as="h3" paddingY={3}>
        Write to us at
        </Heading>
    </Center>
    <Center>
        <Heading as="h4" color={"blue"} >
        admissions@masaischool.com
        </Heading>
    </Center>
    </>
  );
}
