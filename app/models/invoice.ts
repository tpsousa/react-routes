export type InvoiceStatus =
    | "PAID"
    | "PENDING"
    | "OVERDUE";

export type InvoiceDTO = {
    id: number;
    customerName: string;
    date: string;
    amount: number;
    status: InvoiceStatus;
};