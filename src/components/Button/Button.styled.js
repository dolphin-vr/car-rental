import styled from 'styled-components';

export const Panel = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.spacing(16)};
  background-color: transparent;
`;

export const LoadMore = styled.button`
   width: calc(100% / 3);
   padding-top: ${({ theme }) => theme.spacing(2)};
   padding-bottom: ${({ theme }) => theme.spacing(2)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.sm};
   font-weight: 500;
   color: ${({ theme }) => theme.colors.blue};
   background-color: transparent;
   font-size: 16px;
   font-weight: 500;
   text-decoration-line: underline;
`;
