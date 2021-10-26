import { Item } from "./Item";

export interface IReceipt {
    items: Item[],
    date: Date,
    total: Number,
}
