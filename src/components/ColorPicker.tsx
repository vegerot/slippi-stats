/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useOnClickOutside } from "lib/hooks";
import React, { useRef } from "react";
import { ChromePicker } from "react-color";
export const ColorPicker: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => {
  const [show, setShow] = React.useState(false);
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => {
    if (show) {
      setShow(false);
    }
  });

  const onClick = () => {
    if (!show) {
      setShow(true);
    }
  };
  return (
    <div
      ref={wrapperRef}
      css={css`
        position: relative;
        height: 5rem;
        width: 5rem;
        border-radius: 0.5rem;
        background-color: ${value};
      `}
      onClick={onClick}
    >
      {show && (
        <div
          css={css`
            position: absolute;
            z-index: 9999;
            bottom: 0;
          `}
        >
          <ChromePicker color={value} onChange={(color) => onChange(color.hex)} />
        </div>
      )}
    </div>
  );
};
