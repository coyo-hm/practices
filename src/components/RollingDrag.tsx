import styled from "styled-components";
import { useRef } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Wrapper as BoxWrapper, Box as DefaultBox } from "../style";

const Wrapper = styled(BoxWrapper)`
  flex-direction: column;
`;

const Box = styled(DefaultBox)``;

function RollingDrag() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-70, 70], [-360, 360]);
  const gradient = useTransform(
    x,
    [-70, 0, 70],
    [
      "linear-gradient(135deg, rgb(104, 105, 141), rgb(48, 51, 107))",
      "linear-gradient(135deg, rgb(48, 51, 107), rgb(19, 15, 64))",
      "linear-gradient(135deg, rgb(19, 15, 64), rgb(4, 1, 33))",
    ]
  );

  return (
    <Wrapper
      ref={containerRef}
      as={motion.div}
      style={{ background: gradient }}
    >
      <Box
        drag={"x"}
        dragSnapToOrigin
        dragElastic={0}
        dragConstraints={containerRef}
        style={{ x, rotateZ }}
      />
    </Wrapper>
  );
}

export default RollingDrag;
