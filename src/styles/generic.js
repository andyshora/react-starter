import styled from 'styled-components'
import { media } from './utils'
import { theme } from './theme'

export const PageWrapper = styled.div`
  padding: 0;
  background: white;
  min-height: 200px;
`

export const PageSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  ${media.fromLarge`
    padding: 0;`
  }
`;

export const Gutter = styled.div`
  margin: 0 auto;
  padding: 0;
  padding: 0 2rem;
  ${media.fromLarge`
    max-width: 900px;
    padding: 0;`
  }
  ${media.fromXLarge`
    max-width: 1000px;
    padding: 0;`
  }
`;

export const Centered = styled.div`
  text-align: center;

  button {
    margin: 0 auto;
  }
`

export const SuccessButton = styled.button`
  background: ${theme.colors.p2};
  color: white;
`
