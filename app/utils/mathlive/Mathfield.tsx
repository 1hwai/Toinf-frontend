import {useEffect, useMemo, useRef} from "react";
import { MathfieldElement, MathfieldOptions } from "mathlive";

import styles from "../../styles/mathfield.module.scss";

export type MathfieldProps = {
  options?: Partial<MathfieldOptions>;

  value: string;
  onChange: (latex: string) => void;

  className?: string;
};

export default function Mathfield (props: MathfieldProps) {
  const ref = useRef<MathfieldElement>();

  useEffect(() => {
  }, []);

  return (
      <div>
        <math-field className={props} onLoad={() => {this.props = props}} ref={ref}
        ></math-field>
      </div>
  );
};
