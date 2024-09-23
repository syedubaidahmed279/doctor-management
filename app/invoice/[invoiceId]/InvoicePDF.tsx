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
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Item Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Description</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantity</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Amount</Text>
          </View>
        </View>
        {invoice?.items?.map((item: any) => (
          <View style={styles.tableRow} key={item._id}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>-</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
