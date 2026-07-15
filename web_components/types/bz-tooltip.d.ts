import type { TooltipItem, TooltipPosition, TooltipShowOptions } from './types';
export declare const BZ_TOOLTIP_TAG = "bz-item-tooltip";
type PointerPosition = TooltipPosition | MouseEvent | PointerEvent;
export declare class BZTooltipElement extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    show(item: TooltipItem, position: PointerPosition, options?: TooltipShowOptions): void;
    hide(): void;
    move(position: PointerPosition): void;
}
export declare const defineBZTooltip: () => void;
export {};
//# sourceMappingURL=bz-tooltip.d.ts.map