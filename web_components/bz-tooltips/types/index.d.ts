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
export declare const BZ_TOOLTIP_TRIGGER_TAG = "bz-tooltip-trigger";
export declare class BZTooltipTriggerElement extends HTMLElement {
    #private;
    get item(): TooltipItem | null;
    set item(value: TooltipItem | null);
    get delay(): number;
    set delay(value: number);
    get followCursor(): boolean;
    set followCursor(value: boolean);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare const defineBZTooltipTrigger: () => void;
declare global {
    interface HTMLElementTagNameMap {
        'bz-tooltip-trigger': BZTooltipTriggerElement;
    }
}
//# sourceMappingURL=index.d.ts.map