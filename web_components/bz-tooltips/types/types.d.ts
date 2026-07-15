export type RawItemId = string;
export type ItemId = string;
export type Item = {
    count?: number;
    flags?: number;
    metadata?: Record<string, unknown>;
};
export type ItemConfig = {
    count?: number;
    label?: string;
    limit?: number;
    weight?: number;
    flags?: number;
    metadata?: Record<string, unknown>;
};
export type Items<T> = Record<ItemId, T>;
export type RarityData = {
    label?: number[];
    idle?: number[];
    hover?: number[];
    bg?: string;
    tooltip_bg?: string;
};
export type InventoryCategory = {
    Menu?: Array<{
        Id: string;
        Name: string;
    }>;
    Items?: Record<string, string[]>;
};
export type InventoryConfig = {
    Image?: {
        CDN?: string;
    };
    Description?: Record<string, string>;
    Category?: InventoryCategory;
    ItemRarity?: Record<string, string>;
    Rarity?: Record<string, RarityData>;
};
export type TooltipItem = {
    rawItemId: RawItemId;
    label: string;
    imageUrl: string;
    count: number;
    limit?: number;
    weight?: number;
    category?: string;
    description?: string;
    labelColor?: string;
    backgroundUrl?: string;
    metadata?: Record<string, unknown>;
};
export type ResolveTooltipItemOptions = {
    item?: Item;
    itemConfig?: ItemConfig;
    config?: InventoryConfig;
    assetBaseUrl?: string;
    overrides?: Partial<Omit<TooltipItem, 'rawItemId'>>;
};
export type TooltipPosition = {
    x: number;
    y: number;
};
export type TooltipShowOptions = {
    followCursor?: boolean;
};
//# sourceMappingURL=types.d.ts.map