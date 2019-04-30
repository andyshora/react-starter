import styled from 'styled-components'
import { theme } from './theme'

export const AltButton = styled.button`
  margin: 1rem auto;
  background: ${props => props.background || theme.colors.a1};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > svg {
    margin: 0 1rem 0 0;
    transition: all 0.4s;
  }

  &:hover {
    > svg {
      transform: scale(1.2);
    }
  }
`

export const DivideLine = styled.hr`
  border: none;
  width: 1px;
  height: ${props => props.height || 80}px;
  background: ${theme.colors.d1};
  margin: 2rem auto;
  position: relative;
`

export const DivideDots = styled.hr`
  border: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${theme.colors.d2};
  margin: 4rem auto;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -14px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.d2};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 14px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.d2};
  }
`

export const Table = styled.table`
  width: 100%;
  margin: 2rem auto;

  th, td {
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  > tbody > tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.04);
  }
`

export const ConfirmBar = styled.aside`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    margin: 0 0.5rem;
  }
`

export const CancelButton = styled.button`
  background: white;
  color: black;
`
