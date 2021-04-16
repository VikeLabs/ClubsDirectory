import 'styled-components';
import { BaseTheme, ButtonVariants } from 'theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends BaseTheme, ButtonVariants {}
}