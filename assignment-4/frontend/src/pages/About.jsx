import { Image, Heading, Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="gray.50" p={6} borderRadius="md" boxShadow="lg">
      <Flex align="center" p={5}>
        <Image
          paddingY={6}
          paddingX={3}
          borderRadius="full"
          boxSize="300px"
          src="/Image/myPick1.jpg"
          alt="Masai"
        />
        <Heading paddingLeft={3} color="teal.600">About Me</Heading>
      </Flex>
      <Text paddingX={6} fontSize="lg" color="gray.700">
        My name is Arun Kushwaha, and I am a dedicated software engineer specializing in front-end development. With a strong foundation in HTML, CSS, and JavaScript, I excel at creating dynamic and responsive web applications. My expertise extends to modern frameworks and libraries, including React and Chakra UI, enabling me to build user-friendly interfaces with efficient and maintainable code. I am passionate about leveraging these technologies to deliver exceptional user experiences and continuously seek to enhance my skills in the ever-evolving field of web development.
      </Text>
    </Box>
  );
}

