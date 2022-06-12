import { css } from "styled-components";

export default function flex({
  justify = "center",
  align = "center",
  direction = "row",
  gap,
}) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}

/* flex Sample */
// 아래처럼 가져다가 쓰시면 됩니다!
//${flex({ direction: "column", gap: "24px" })}
