import type { Item, ItemConfig, Items } from './types';
export type InventoryStats = {
    totalWeight: number;
    slots: number;
};
export declare const calculateInventoryStats: (items: Items<Item>, itemsConfig: Items<ItemConfig>) => InventoryStats;
//# sourceMappingURL=inventory-stats.d.ts.map