import { motion } from "motion/react";
import styled from "styled-components";
import MountUnmountAnimation from "./MountUnmoundAnimation";
import FullScreenOverlay from "./FullScreenOverlay";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useState } from "react";
import Link from "next/link";
import { worksMenuOptions } from "../../assets/common";
import { DropdownMenuOptionProps } from "./DropdownMenu";

interface MobileNavMenuProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;

  & > *:nth-last-child(-n + 1) {
    height: 100%;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileNavLink = styled(Link)`
  width: 100%;
  color: #333;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: white;
  padding: 0.5rem 1rem;
  z-index: 1003;

  &:hover {
    opacity: 0.5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: -40px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const ArrowButton = styled(IoIosArrowDown)<{ isOpened: boolean }>`
  width: auto;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpened ? "rotate(180deg)" : "none")};
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.5;
  }
`;

const MobileSubmenu = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const MobileSubNavLink = styled(Link)<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? "rgba(0, 0, 0, 0.1)" : "none"};
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  z-index: 1002;

  &:hover {
    background-color: #999;
  }
`;

const MobileNavMenu = ({ isOpened, setIsOpened }: MobileNavMenuProps) => {
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const [selected, setSelected] = useState<DropdownMenuOptionProps | null>(
    null
  );

  const onArrowButtonClick = useCallback(() => {
    setIsSubmenuOpened((prev) => !prev);
  }, []);

  return (
    <MountUnmountAnimation isVisible={isOpened}>
      <FullScreenOverlay opacity={0.6} />
      <MobileMenu
        initial={{ x: -100, opacity: 1 }}
        animate={{ x: 0 }}
        exit={{ x: -100, opacity: 1 }}
        transition={{ type: "spring", damping: 20, duration: 0.5 }}
      >
        <CloseButton onClick={() => setIsOpened(false)}>✕</CloseButton>
        <MobileNavLink href="/about" onClick={() => setIsOpened(false)}>
          About
        </MobileNavLink>
        <WorkContainer>
          <MobileNavLink href="/works" onClick={() => setIsOpened(false)}>
            Works
          </MobileNavLink>
          <ArrowButton
            isOpened={isSubmenuOpened}
            onClick={onArrowButtonClick}
          />
        </WorkContainer>
        <MountUnmountAnimation
          isVisible={isSubmenuOpened}
          initial={{ height: "0%" }}
          animate={{ height: "auto" }}
          exit={{ height: "0%" }}
          transition={{ type: "spring", damping: 20, duration: 0.5 }}
        >
          <MobileSubmenu>
            {worksMenuOptions.map((option) => (
              <MobileSubNavLink
                key={option.title}
                href={`/works?tag=${option.title}`}
                selected={selected === option}
                onClick={() => {
                  setSelected(option);
                  setIsOpened(false);
                }}
              >
                {option.title}
              </MobileSubNavLink>
            ))}
          </MobileSubmenu>
        </MountUnmountAnimation>
        <MobileNavLink href="/contact" onClick={() => setIsOpened(false)}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </MountUnmountAnimation>
  );
};

export default MobileNavMenu;
