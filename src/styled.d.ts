// styled.d.ts
import 'styled-components';
import { BaseTheme, ButtonVariants } from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme, ButtonVariants {}
}
