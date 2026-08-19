import { invoices } from "../data/invoices";

export default function InvoicesList() {
    return (
        <div>
            {invoices.map(invoice => (
                <div key={invoice.id}>
                    <h3>
                        Invoice #{invoice.id}
                    </h3>

                    <p>
                        Cliente: {invoice.customerName}
                    </p>

                    <p>
                        Valor: R$ {invoice.amount.toFixed(2)}
                    </p>

                    <p>
                        Status: {invoice.status}
                    </p>
                </div>
            ))}
        </div>
    );
}