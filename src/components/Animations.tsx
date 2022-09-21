import styled from "styled-components";
import { Wrapper as BoxWrapper, Box } from "../style";

const Wrapper = styled(BoxWrapper)`
  background: linear-gradient(135deg, #ff7979, #eb4d4b);
`;

function Animations() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", delay: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 270 }}
      />
    </Wrapper>
  );
}

export default Animations;
