import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const DropdownMenuContainer = styled.div`
  position: absolute;
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  tab-index: 10;
  background-color: white;
`;

const DropdownMenuItem = styled(Link)<{ selected: boolean }>`
  display: inline;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid rgb(33, 33, 33);
  background-color: ${(props) =>
    props.selected ? "rgba(33, 33, 33, 0.3)" : "white"};

  font-size: 1rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: rgba(33, 33, 33, 0.5);
    color: white;
  }
`;

const SCROLLBAR_WIDTH = 16;
const DROPDOWN_MARGIN = 10;

export interface DropdownMenuOptionProps {
  title: string;
  subtitle: string;
  address: string;
}

interface DropdownMenuProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  targetRef: React.RefObject<HTMLElement | null>;
  options: DropdownMenuOptionProps[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpened,
  setIsOpened,
  targetRef,
  options,
}) => {
  const [selected, setSelected] = useState<DropdownMenuOptionProps | null>(
    null
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!targetRef.current || !menuRef.current) {
      return;
    }

    const {
      left: targetLeft,
      bottom: targetBottom,
      top: targetTop,
      right: targetRight,
      width: targetWidth,
      height: targetHeight,
    } = targetRef.current.getBoundingClientRect();
    const { width: menuWidth, height: menuHeight } =
      menuRef.current.getBoundingClientRect();

    // let position = menuPosition;
    let position = "BOTTOM_RIGHT";

    // if (depthLevel > 0) {
    //   position = 'TOP_RIGHT';
    // }

    let top;
    let left;
    let height;

    if (position === "TOP_LEFT") {
      top = targetTop;
      left = targetLeft;
    } else if (position === "TOP_RIGHT") {
      top = targetTop;
      left = targetRight;
    } else if (position === "BOTTOM_RIGHT") {
      top = targetBottom;
      left = targetRight;
    } else if (position === "APPBAR_USERLIST") {
      top = targetBottom + 6;
      left = targetLeft - 2;
    } else {
      top = targetBottom;
      left = targetLeft;
    }

    const bottom = top + menuHeight;
    let right = left + menuWidth;

    const containerHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const containerWidth =
      window.innerWidth || document.documentElement.clientWidth;

    let overflowed = false;
    // 드랍 다운 메뉴 크기가 윈도우 아래로 넘어갈 경우 핸들링
    // if (bottom > containerHeight) {
    //   overflowed = true;
    //   if (overflowPlacement === "BOTTOM") {
    //     const overflow = bottom - containerHeight;
    //     // 드랍 다운 메뉴 위치 고정. height 를 줄여 scroll 생성
    //     height = menuHeight - overflow - DROPDOWN_MARGIN;
    //   } else if (overflowPlacement === "TOP") {
    //     // 드랍 다운 메뉴를 아래 쪽이 아닌 위쪽으로 이동
    //     // top = depthLevel > 0 ? top - menuHeight + targetHeight : top - menuHeight - targetHeight;
    //     top = top - menuHeight + targetHeight;
    //     if (top < 0) {
    //       // height 를 줄여 scroll 생성
    //       const overflow = -top;
    //       top = DROPDOWN_MARGIN;
    //       height = menuHeight - overflow - DROPDOWN_MARGIN;
    //     }
    //   }
    // }
    if (bottom > containerHeight) {
      overflowed = true;
      const overflow = bottom - containerHeight;
      // 드랍 다운 메뉴 위치 고정. height 를 줄여 scroll 생성
      height = menuHeight - overflow - DROPDOWN_MARGIN;
    }

    // 드랍다운 메뉴 크기가 윈도우 우측으로 넘어갈 경우 핸들링
    if (overflowed) {
      right += SCROLLBAR_WIDTH;
    }
    if (right >= containerWidth) {
      // left = depthLevel > 0 ? left - menuWidth - targetWidth : left - menuWidth + targetWidth;
      left = left - menuWidth - targetWidth;
    }

    menuRef.current.style.top = `${top}px`;
    menuRef.current.style.left = `${left}px`;
    menuRef.current.style.height = `${height}px`;
  }, [isOpened, targetRef]);

  const renderedOptions = options.map((option) => {
    return (
      <DropdownMenuItem
        key={option.title}
        href={`/works${option.address}`}
        selected={selected === option}
        onClick={() => setSelected(option)}
      >
        {option.title}
      </DropdownMenuItem>
    );
  });

  return (
    <DropdownMenuContainer
      ref={menuRef}
      onMouseLeave={() => setIsOpened(false)}
    >
      {renderedOptions}
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;
