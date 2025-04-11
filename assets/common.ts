import { DropdownMenuOptionProps } from "../components/common/DropdownMenu";

export const MOBILE_BREAKPOINT = 992;
export const MOBILE = `(max-width: ${MOBILE_BREAKPOINT}px)`;

export const worksMenuOptions: DropdownMenuOptionProps[] = [
  { title: "ALL", subtitle: "전체" },
  { title: "BRANDING", subtitle: "브랜딩·로고" },
  { title: "PACKAGE", subtitle: "패키지" },
  { title: "AD·EDITORIAL", subtitle: "광고·편집" },
];
