import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from 'styled-system';

export type Variant = 'clubListButton' | 'clubCategoriesButton' | 'tagButton' | 'sideBarButton';

export interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: Variant;
  disabled?: boolean;
}

const ActionButtonStyle = styled('button')`
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 12px;
  padding: 0.5rem 2rem;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  ${buttonStyle}
  :disabled {
    background-color: #c2c2c2;
    color: #4d4d4d;
  }
`;

function ActionButton({ children, onClick, disabled = false, ...props }: Props) {
  return (
    <ActionButtonStyle onClick={onClick} {...props} disabled={disabled}>
      {children}
    </ActionButtonStyle>
  );
}

export default ActionButton;
