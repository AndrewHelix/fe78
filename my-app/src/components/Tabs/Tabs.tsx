import styled from 'styled-components';
import type { TabItem, TabValue } from './types';

type Props = {
  items: TabItem[];
  activeTab: TabValue;
  onChange: (activeTab: TabValue) => void;
};

export const Tabs = ({ items, activeTab, onChange }: Props) => {
  return (
    <TabsContainer>
      {items.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <TabButton
            key={tab.value}
            $active={isActive}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </TabButton>
        );
      })}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  display: flex;
  gap: 48px;
  border-bottom: 1px solid black;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 16px 0;
  border: 0;
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  color: ${({ $active }) => ($active ? '#FF7F50' : 'black')};

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;
