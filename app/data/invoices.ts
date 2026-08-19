import type { InvoiceDTO } from "../models/invoice";

export const invoices: InvoiceDTO[] = [
    {
        id: 1,
        customerName: "João Silva",
        date: "2026-08-15",
        amount: 350.00,
        status: "PAID"
    },
    {
        id: 2,
        customerName: "Maria Santos",
        date: "2026-08-16",
        amount: 820.50,
        status: "PENDING"
    },
    {
        id: 3,
        customerName: "Carlos Souza",
        date: "2026-08-17",
        amount: 120.75,
        status: "PAID"
    },
    {
        id: 4,
        customerName: "Ana Oliveira",
        date: "2026-08-18",
        amount: 1500.00,
        status: "OVERDUE"
    },
    {
        id: 5,
        customerName: "Pedro Costa",
        date: "2026-08-19",
        amount: 475.90,
        status: "PENDING"
    }
];