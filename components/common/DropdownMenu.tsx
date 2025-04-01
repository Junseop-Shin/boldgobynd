import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import MountUnmountAnimation from "./MountUnmoundAnimation";

const DropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 150px;
  align-items: center;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.08) 0 0 4px 2px;
  padding: 2px 0;
  border-radius: 8px;
  outline: transparent;
  background-color: white;
  z-index: 1000;
`;

const DropdownMenuItem = styled(Link)<{ selected: boolean }>`
  display: flex;
  height: 28px;
  box-sizing: border-box;
  margin: 2px 4px;
  padding: 0 15px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
    let position = "APPBAR_USERLIST";

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
      top = targetBottom + 27;
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
  }, [targetRef, isOpened]);

  const renderedOptions = options.map((option) => {
    return (
      <DropdownMenuItem
        key={option.title}
        href={`/works?tag=${option.title}`}
        selected={selected === option}
        onClick={() => setSelected(option)}
      >
        {option.title}
      </DropdownMenuItem>
    );
  });

  return (
    <MountUnmountAnimation isVisible={isOpened}>
      <DropdownMenuContainer
        ref={menuRef}
        onMouseLeave={() => setIsOpened(false)}
      >
        {renderedOptions}
      </DropdownMenuContainer>
    </MountUnmountAnimation>
  );
};

export default DropdownMenu;
