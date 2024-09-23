   import React from 'react';
   import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

   const styles = StyleSheet.create({
     page: {
       flexDirection: 'column',
       backgroundColor: '#E4E4E4'
     },
     section: {
       margin: 10,
       padding: 10,
       flexGrow: 1
     }
   });


   interface InvoiceProps {
     invoice: any;
   }

   const InvoicePDF = ({ invoice }: InvoiceProps) => (
     <Document>
       <Page size="A4" style={styles.page}>
         <View style={styles.section}>
           <Text>Hospital: {invoice?.doctor?.hospitalName}</Text>
           <Text>Patient Name: {invoice?.patientName}</Text>
           <Text>Phone Number: {invoice?.phoneNumber}</Text>
           <Text>Email: {invoice?.email}</Text>
           <Text>Date: {invoice?.date}</Text>
         </View>

         <View style={styles.section}>
           <Text>Items:</Text>
           {invoice?.items?.map((item: any) => (
             <View key={item._id}>
               <Text>{item.name} - {item.amount}</Text>
             </View>
           ))}
         </View>
       </Page>
     </Document>
   );

   export default InvoicePDF;
