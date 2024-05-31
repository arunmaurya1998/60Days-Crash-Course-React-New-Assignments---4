import { Image, Center, Heading, Box, Flex, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="gray.100" p={6} minH="100vh">
      <Center mb={5}>
        <Image
          paddingY={6}
          borderRadius="full"
          boxSize="300px"
          src="/Image/myPick1.jpg"
          alt="Masai"
        />
      </Center>
      <Center mb={5}>
        <Heading as="h3" paddingY={3} color="teal.600">
          Welcome to my Home page
        </Heading>
      </Center>
      <Center mb={10}>
        <Text fontSize="lg" color="gray.700" textAlign="center" maxW="600px">
          My name is Arun Kushwaha, and I am a dedicated software engineer specializing in front-end development. With a strong foundation in HTML, CSS, and JavaScript, I excel at creating dynamic and responsive web applications. My expertise extends to modern frameworks and libraries, including React and Chakra UI, enabling me to build user-friendly interfaces with efficient and maintainable code. I am passionate about leveraging these technologies to deliver exceptional user experiences and continuously seek to enhance my skills in the ever-evolving field of web development.
        </Text>
      </Center>
      <VStack spacing={5}>
        <Box bg="white" p={5} borderRadius="md" boxShadow="md" maxW="400px">
          <Image
            borderRadius="md"
            src="https://triazinesoft.com/admin/assets/images/posts/scalable-web-applications-header.png" // 
            alt="Coding Background 1"
          />
          <Text mt={3} color="gray.600">
            Building scalable and efficient web applications with modern technologies.
          </Text>
        </Box>
        <Box bg="white" p={5} borderRadius="md" boxShadow="md" maxW="400px">
          <Image
            borderRadius="md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7JsAShvg43_4OJ8fEnFOS7TviKPZch8lLw&s" 
            alt="Coding Background 2"
          />
          <Text mt={3} color="gray.600">
            Creating user-friendly interfaces that provide excellent user experiences.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}


