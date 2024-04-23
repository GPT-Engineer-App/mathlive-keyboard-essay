import React, { useState, useRef } from "react";
import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import { FaKeyboard } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if user types $$ to trigger MathLive keyboard
    if (value.includes("$$")) {
      onOpen();
    }
  };

  const handleMathInput = (mathValue) => {
    // Simulate inserting math value into the input
    const newValue = inputValue.replace("$$", mathValue);
    setInputValue(newValue);
    onClose();
  };

  return (
    <Box p={5}>
      <Input ref={inputRef} value={inputValue} onChange={handleInputChange} placeholder="Type here or use $$ for math symbols..." size="lg" />
      <Button leftIcon={<FaKeyboard />} colorScheme="teal" onClick={onOpen} mt={3}>
        Add Math
      </Button>

      {/* Simulated MathLive Keyboard Modal */}
      {isOpen && (
        <Box position="absolute" top="20%" left="50%" transform="translateX(-50%)" p={5} boxShadow="lg" bg="white">
          <Box as="p">Math Input Keyboard (Simulated)</Box>
          <Button onClick={() => handleMathInput("√x")}>√x</Button>
          <Button onClick={() => handleMathInput("π")}>π</Button>
          <Button onClick={() => handleMathInput("Σ")}>Σ</Button>
          <Button onClick={onClose} colorScheme="red" mt={3}>
            Close
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;
