import { PropsWithChildren } from "react";

import * as Styles from "./Award.styles";

export interface AwardProps {
  backgroundSrc: string;
}

function Award({ backgroundSrc, children }: PropsWithChildren<AwardProps>) {
  return (
    <Styles.AwardContent backgroundSrc={backgroundSrc}>
      {children}
    </Styles.AwardContent>
  );
}

export default Award;
