import { Spacing } from "@react.ds/foundation";
import { ReactNode } from "react";

interface MarginProps {
  space?: keyof typeof Spacing;
  children?: ReactNode,
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
  let className = ``;

  if(!left && !top && !right && !bottom) {
    className = `dse-margin-${space}`;
  }
  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }

  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }

  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }
  return <div className={className}>{children}</div>;
};

export default Margin;
