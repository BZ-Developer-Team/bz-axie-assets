import { BZTooltipElement } from './bz-tooltip';
import type { TooltipItem, TooltipPosition, TooltipShowOptions } from './types';
export * from './bz-tooltip';
export * from './inventory-helpers';
export * from './inventory-stats';
export * from './metadata-formatter';
export * from './types';
export declare const showTooltip: (item: TooltipItem, position: TooltipPosition | MouseEvent | PointerEvent, options?: TooltipShowOptions) => BZTooltipElement;
export declare const hideTooltip: () => void;
export type BindTooltipOptions = TooltipShowOptions & {
    delay?: number;
    hideOnPointerDown?: boolean;
};
export declare const bindTooltip: (target: Element, getItem: (event: PointerEvent) => TooltipItem | null | undefined, options?: BindTooltipOptions) => (() => void);
//# sourceMappingURL=index.d.ts.map