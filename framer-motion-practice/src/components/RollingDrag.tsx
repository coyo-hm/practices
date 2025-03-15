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
      "linear-gradient(135deg, rgb(199, 236, 238), rgb(126, 214, 223))",
      "linear-gradient(135deg, rgb(126, 214, 223), rgb(34, 166, 179))",
      "linear-gradient(135deg, rgb(34, 166, 179), rgb(4, 1, 33))",
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
