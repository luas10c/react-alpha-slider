import { Container, Wrapper } from "./styles";

const AlphaSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1626375555956-1e87e7aa92b5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626375555783-f5fc7149e03f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <Container>
      <Wrapper>
        <img src={images[1]} alt="#" />
      </Wrapper>
    </Container>
  );
};

export default AlphaSlider;
