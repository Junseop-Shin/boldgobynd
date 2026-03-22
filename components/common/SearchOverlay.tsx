import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { galleryImages } from "../../assets/works";
import { worksMenuOptions } from "../../assets/common";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Panel = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* 헤더(z-index:1000)가 위에 올라오므로 padding-top으로 헤더 높이만큼 밀어줌 */
  padding-top: 72px;

  @media (max-width: 992px) {
    padding-top: 50px;
  }
`;

const SearchBarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 1.2rem 1.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
`;

const SearchIcon = styled(IoSearchOutline)`
  font-size: 1.2rem;
  color: #555;
  flex-shrink: 0;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #111;
  background: transparent;

  &::placeholder {
    color: #bbb;
  }
`;

const ClearBtn = styled(IoClose)`
  font-size: 1.1rem;
  color: #aaa;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #555;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 0;
  margin: 1rem 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.2rem;
  border: none;
  background: transparent;
  font-size: 0.9rem;
  color: ${({ active }) => (active ? "#111" : "#999")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  cursor: pointer;
  border-bottom: 2px solid ${({ active }) => (active ? "#111" : "transparent")};
  margin-bottom: -1px;
  transition: color 0.15s;
`;

const ResultsArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem;
`;

const ResultCount = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin: 1.2rem 0 0.5rem;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResultItem = styled.li`
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const ResultLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 0;

  &:hover {
    opacity: 0.75;
  }
`;

const Thumb = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 2px;
`;

const ResultText = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultCategory = styled.p`
  font-size: 0.75rem;
  color: #3366cc;
  margin-bottom: 0.2rem;
`;

const ResultTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResultDesc = styled.p`
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EmptyMsg = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: #aaa;
  margin-top: 3rem;
`;

const TABS = [{ title: "갤러리", key: "ALL" }, ...worksMenuOptions.slice(1).map((o) => ({ title: o.subtitle ?? o.title, key: o.title }))];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? galleryImages.filter((img) => {
        const q = query.toLowerCase();
        const matchesQuery =
          img.title?.toLowerCase().includes(q) ||
          img.titleDesc.toLowerCase().includes(q) ||
          img.categoryDesc.toLowerCase().includes(q) ||
          img.categories.some((c) => c.toLowerCase().includes(q));
        const matchesTab =
          activeTab === "ALL" || img.categories.includes(activeTab);
        return matchesQuery && matchesTab;
      })
    : [];

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery("");
      setActiveTab("ALL");
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Panel
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <SearchBarWrap>
            <SearchIcon />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            {query && <ClearBtn onClick={() => setQuery("")} />}
          </SearchBarWrap>

          <Tabs>
            {TABS.map((tab) => (
              <Tab
                key={tab.key}
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </Tab>
            ))}
          </Tabs>

          <ResultsArea>
            {query.trim() && (
              <>
                <ResultCount>{results.length}개의 검색 결과</ResultCount>
                {results.length > 0 ? (
                  <ResultList>
                    {results.map((img) => (
                      <ResultItem key={img.title}>
                        <ResultLink href={`/works/${img.title}`} onClick={handleClose}>
                          <Thumb src={img.thumbnailImage} alt={img.titleDesc} />
                          <ResultText>
                            <ResultCategory>갤러리</ResultCategory>
                            <ResultTitle>{img.titleDesc}</ResultTitle>
                            <ResultDesc>{img.categoryDesc}</ResultDesc>
                          </ResultText>
                        </ResultLink>
                      </ResultItem>
                    ))}
                  </ResultList>
                ) : (
                  <EmptyMsg>검색 결과가 없습니다.</EmptyMsg>
                )}
              </>
            )}
          </ResultsArea>
        </Panel>
      )}
    </AnimatePresence>
  );
}
