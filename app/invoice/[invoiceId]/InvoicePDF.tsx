import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/Roboto-Regular.ttf" },
    { src: "/fonts/Roboto-Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Roboto",
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
    alignItems: "center",
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
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

interface InvoiceProps {
  invoice: any;
}

const InvoicePDF = ({ invoice }: InvoiceProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.invoiceTitle}>Invoice</Text>
        <View style={styles.hospitalDetails}>
          <Text style={styles.label}>Hospital Name:</Text>
          <Text style={styles.value}>{invoice?.doctor?.hospitalName}</Text>
          {/* Add more hospital details as needed */}
        </View>
      </View>

      <View style={styles.patientDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Patient Name:</Text>
          <Text style={styles.value}>{invoice?.patientName}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{invoice?.phoneNumber}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{invoice?.email}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{invoice?.date}</Text>
        </View>
        {/* Add more patient details as needed */}
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text>Item Name</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text>Description</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text>Quantity</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text>Amount</Text>
          </View>
        </View>
        {invoice?.items?.map((item: any, index: number) => (
          <View style={styles.tableRow} key={item._id}>
            <View style={styles.tableCol}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>-</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>1</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{item.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
