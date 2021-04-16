// styled.d.ts
import 'styled-components';
import { BaseTheme, ButtonVariants } from './Theme';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme, ButtonVariants {}
}
