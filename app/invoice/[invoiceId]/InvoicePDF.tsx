// /Users/abdurrahman/VsCode/WebDev/artifConnect/doctor-management/app/invoice/[invoiceId]/InvoicePDF.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const newStyles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
    borderBottom: "1px solid #ccc",
    paddingBottom: 10,
    gap: 20,
  },
  image: {
    width: "100px", // or whatever width you want
    height: "50px", // or whatever height you want
  },
  hospitalLogo: {
    flexDirection: "row",
    justifyContent: "flex-start", // or "flex-end" to align to the right
  },

  hospitalDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  hospitalName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    textDecoration: "underline",
  },
  patientDetailsContainer: {
    marginBottom: 20,
  },
  patientDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1px solid #ccc",
    paddingBottom: 10,
  },
  detailItem: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    marginBottom: 5,
    gap: 10,
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
    fontSize: 12,
    textAlign: "left",
    flexGrow: 1,
  },
  tableCol: {
    padding: 8,
    fontSize: 12,
    textAlign: "left",
    flexGrow: 1,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
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
  const imageUrl = invoice?.doctor?.image;
  return (
    <Document>
      <Page size="A4" style={newStyles.page}>
        <View style={newStyles.header}>
          {imageUrl && (
            <View style={newStyles.hospitalLogo}>
              <Image style={newStyles.image} src={imageUrl} />
            </View>
          )}
          <View style={newStyles.hospitalDetails}>
            <Text style={newStyles.hospitalName}>
              {invoice?.doctor?.hospitalName}
            </Text>
            <Text style={newStyles.label}>
              {invoice?.doctor?.hospitalAddress?.address}
            </Text>
            <Text style={newStyles.label}>
              {invoice?.doctor?.hospitalAddress?.city},{" "}
              {invoice?.doctor?.hospitalAddress?.state} -{" "}
              {invoice?.doctor?.hospitalAddress?.pincode}
            </Text>
          </View>
        </View>

        <View style={newStyles.patientDetailsContainer}>
          <View style={newStyles.patientDetails}>
            <View style={newStyles.detailItem}>
              <Text style={newStyles.label}>Patient Name:</Text>
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
          </View>
        </View>
        <View style={newStyles.table}>
          <View style={newStyles.tableRow}>
            <View style={newStyles.tableColHeader}>
              <Text>Item Name</Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text> </Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text> </Text>
            </View>
            <View style={newStyles.tableColHeader}>
              <Text>Amount </Text>
            </View>
          </View>
          {invoice?.items?.map((item: any, index: number) => (
            <View style={newStyles.tableRow} key={item._id}>
              <View style={newStyles.tableCol}>
                <Text>{item.name}</Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text></Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text> </Text>
              </View>
              <View style={newStyles.tableCol}>
                <Text>Rs.{item.amount}</Text>
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
              <Text style={newStyles.totalAmount}>
                Rs.{" "}
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
              <Text style={newStyles.totalLabel}>GST (10%):</Text>
            </View>
            <View style={newStyles.tableCol}>
              <Text style={newStyles.totalAmount}>
                Rs.{" "}
                {(
                  invoice?.items?.reduce(
                    (acc: number, item: any) => acc + item.amount,
                    0
                  ) * 0.1
                ).toFixed(2)}
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
                Rs.{" "}
                {(
                  invoice?.items?.reduce(
                    (acc: number, item: any) => acc + item.amount,
                    0
                  ) * 1.1
                ).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
