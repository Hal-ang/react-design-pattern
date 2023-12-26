import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div.attrs<{ $flex: number }>((props) => ({
  $flex: props.$flex,
}))`
  flex: ${(props) => props.$flex};
`;

const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: {
  children: ReactNode;
  leftWidth?: number;
  rightWidth?: number;
}) => {
  const [left, right] = children as ReactNode[];

  return (
    <Container>
      <Panel $flex={leftWidth}>{left}</Panel>

      <Panel $flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
