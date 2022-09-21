import styled from "styled-components";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import { Wrapper as BoxWrapper, Box as DefaultBox } from "../style";

const Wrapper = styled(BoxWrapper)`
  flex-direction: column;
  background: linear-gradient(135deg, #686de0, #4834d4);
`;

const Box = styled(DefaultBox)`
  display: flex;
  width: 100px;
  flex-direction: column-reverse;
  background: rgba(255, 255, 255, 0.2);
`;

const SmallBox = styled(motion.div)`
  width: inherit;
  height: inherit;
  background: white;
  transform-origin: 50% 100%;
  border-radius: 20px;
`;

function Scroll() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Wrapper>
      <Box style={{ scale }}>
        <SmallBox
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </Box>
    </Wrapper>
  );
}

export default Scroll;
