import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const newStyles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    alignItems: "flex-end",
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
    display: "flex",
    width: "50%", // Ensure patient details take up full width
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
    alignItems: "center", // Align items vertically
  },
  tableColHeader: {
    padding: 8,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "left",
    flexGrow: 1, // Allow columns to take available space
  },
  tableCol: {
    padding: 8,
    fontSize: 10,
    textAlign: "left",
    flexGrow: 1, // Allow columns to take available space
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "bold",
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
  console.log(invoice);
  return (
    <Document>
      <Page size="A4" style={newStyles.page}>
        <View style={newStyles.header}>
          <Text style={newStyles.invoiceTitle}>Invoice</Text>
          <View style={newStyles.hospitalDetails}>
            <Text style={newStyles.label}>Hospital Name:</Text>
            <Text style={newStyles.value}>{invoice?.doctor?.hospitalName}</Text>
            <Text style={newStyles.value}>
              {invoice?.doctor?.hospitalAddress?.address}
            </Text>
            <Text style={newStyles.value}>
              {invoice?.doctor?.hospitalAddress?.city},{" "}
              {invoice?.doctor?.hospitalAddress?.state} -{" "}
              {invoice?.doctor?.hospitalAddress?.pincode}
            </Text>
          </View>
        </View>

        <View style={newStyles.patientDetails}>
          <View style={{ ...newStyles.detailItem, width: "100%" }}>
            <Text style={newStyles.label}>Patient Name: </Text>
            <Text style={newStyles.value}>{invoice?.patientName}</Text>
          </View>
          <View style={newStyles.detailItem}>
            <Text style={newStyles.label}>Phone Number:</Text>
            <Text style={newStyles.value}>{invoice?.phoneNumber}</Text>
          </View>
          <View style={newStyles.detailItem}>
            <Text style={newStyles.label}>Email:</Text>
            <Text style={newStyles.value}>{invoice?.email}</Text>
          </View>
          <View style={newStyles.detailItem}>
            <Text style={newStyles.label}>Date:</Text>
            <Text style={newStyles.value}>{invoice?.date}</Text>
          </View>
          {/* Add more patient details as needed */}
        </View>

        <View style={newStyles.table}>
          <View style={newStyles.tableRow}>
            <View style={newStyles.tableColHeader}>
              <Text>Item Name</Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text>Description</Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text>Quantity</Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text>Amount</Text>
            </View>
          </View>
          {invoice?.items?.map((item: any, index: number) => (
            <View style={newStyles.tableRow} key={item._id}>
              <View style={newStyles.tableCol}>
                <Text>{item.name}</Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text>₹{item.amount}</Text>
              </View>
            </View>
          ))}
          <View style={newStyles.tableRow}>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalLabel}>Total:</Text>
            </View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalLabel}>Total:</Text>
            </View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalAmount}>
                ₹{" "}
                {invoice?.items?.reduce(
                  (acc: number, item: any) => acc + item.amount,
                  0
                )}
              </Text>
            </View>
          </View>
          <View style={newStyles.tableRow}>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalLabel}>Tax (10%):</Text>
            </View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalAmount}>
                ₹{" "}
                {(invoice?.items?.reduce(
                  (acc: number, item: any) => acc + item.amount,
                  0
                ) * 0.1).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={newStyles.tableRow}>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}></View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalLabel}>Grand Total:</Text>
            </View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalAmount}>
                ₹{" "}
                {(invoice?.items?.reduce(
                  (acc: number, item: any) => acc + item.amount,
                  0
                ) * 1.1).toFixed(2)}
              </Text>
            </View>
          </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;


