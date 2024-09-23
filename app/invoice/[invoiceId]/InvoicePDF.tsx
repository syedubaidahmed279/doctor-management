import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items to the top
    marginBottom: 20,
    borderBottom: "1px solid #ccc",
    paddingBottom: 10,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hospitalDetails: {
    flexDirection: "column",
    alignItems: "flex-end", // Align to the right
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
  },
  value: {
    fontSize: 10,
    textDecoration: "underline",
  },
  patientDetails: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1px solid #ccc",
    paddingBottom: 10,
  },
  detailItem: {
    width: "50%",
    marginBottom: 5,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tableColHeader: {
    padding: 8,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "left",
  },
  tableCol: {
    padding: 8,
    fontSize: 10,
    textAlign: "left",
    flex: 1, // Distribute space evenly
  },
  total: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  totalAmount: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

interface InvoiceProps {
  invoice: any;
}

const InvoicePDF = ({ invoice }: InvoiceProps) => {
  const totalAmount = invoice?.items?.reduce(
    (sum: number, item: any) => sum + item.amount,
    0
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ... (rest of the invoice content) ... */}

        <View style={styles.total}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>₹{totalAmount}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
