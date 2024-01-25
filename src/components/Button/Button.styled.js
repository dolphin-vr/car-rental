import styled from 'styled-components';

export const Panel = styled.div`
   top: 0;
   left: 0;
   position: sticky;
   z-index: 1100;
   width: 100%;
   min-height: ${({ theme }) => theme.spacing(16)};
   margin-top: ${({ theme }) => theme.spacing(8)};
   padding: ${({ theme }) => theme.spacing(6)};
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
`;

export const LoadMore = styled.button`
   padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(12)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.lm};
   font-weight: 500;
   color: ${({ theme }) => theme.colors.blue};
   background-color: transparent;
   font-size: 16px;
   font-weight: 500;
   text-decoration-line: underline;
   transition: color ${({ theme }) => theme.effect.cubic}, background-color ${({ theme }) => theme.effect.cubic};

   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.gray};
   }
   &:hover {
      color: ${({ theme }) => theme.colors.activeblue};
      background-color: ${({ theme }) => theme.colors.scrollgray};
   }
   &.active {
      color: ${({ theme }) => theme.colors.activeblue};
   }
`;
