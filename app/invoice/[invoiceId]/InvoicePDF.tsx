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
// Font.register({
//   family: "Roboto",
//   fonts: [
//     { src: "/fonts/Roboto-Regular.ttf" },
//     { src: "/fonts/Roboto-Bold.ttf", fontWeight: "bold" },
//   ],
// });

const styles = StyleSheet.create({
  page: {
    // fontFamily: "Roboto",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hospitalDetails: {
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
  },
  patientDetails: {
    marginTop: 20,
    flexDirection: "column",
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
  },
  tableCol: {
    padding: 8,
    textAlign: "left",
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
          <Text>{invoice?.doctor?.hospitalName}</Text>
        </View>
      </View>

      <View style={styles.patientDetails}>
        <Text style={styles.label}>Patient Name:</Text>
        <Text>{invoice?.patientName}</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text>{invoice?.phoneNumber}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text>{invoice?.email}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text>{invoice?.date}</Text>
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
        {invoice?.items?.map((item: any) => (
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
