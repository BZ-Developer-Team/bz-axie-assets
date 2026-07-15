import type { InventoryConfig, RarityData, RawItemId, ResolveTooltipItemOptions, TooltipItem } from './types';
export declare const DEFAULT_ASSET_BASE_URL = "https://raw.githubusercontent.com/BZ-Developer-Team/bz-axie-assets/refs/heads/main";
export declare const parseRawItemId: (rawItemId: RawItemId) => {
    itemId: string;
    itemUuid?: string;
};
export declare const getImageUrl: (rawItemId: RawItemId, assetBaseUrl?: string) => string;
export declare const getRarityImageUrl: (name: string, assetBaseUrl?: string) => string;
export declare const getTooltipImageUrl: (name: string, assetBaseUrl?: string) => string;
export declare const rgbToCss: (rgb?: number[]) => string | undefined;
export declare const getRarityName: (rawItemId: RawItemId, config?: InventoryConfig) => string;
export declare const getRarityData: (rawItemId: RawItemId, config?: InventoryConfig) => RarityData | null;
export declare const getRarityLabelColor: (rawItemId: RawItemId, config?: InventoryConfig) => string | undefined;
export declare const getRarityHoverColor: (rawItemId: RawItemId, config?: InventoryConfig) => string | undefined;
export declare const getItemCategory: (rawItemId: RawItemId, config?: InventoryConfig) => string | undefined;
export declare const resolveTooltipItem: (rawItemId: RawItemId, options?: ResolveTooltipItemOptions) => TooltipItem;
//# sourceMappingURL=inventory-helpers.d.ts.map