/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

export const PaymentDetailsPdf: React.FC<PaymentDetails> = ({
  bankName,
  accountNumber,
  accountName,
  routingCode,
  swiftCode,
  ifscCode,
  intermediaryBank,
  currency = "EUR",
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  const tableRow = (left: string, right: string | null | undefined) => {
    return <View style={pdfUtils.tableRow}>
      <Text style={pdfUtils.paymentTitle}>{left}</Text>
      <Text
        style={{
          flex: 1,
          ...pdfTypography.itemDescription,
        }}
      >
        {right ? right : "-"}
      </Text>
    </View>
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingRight: 12,
          paddingVertical: 16,
          flexDirection: "column",
        }}
      >
        <Text style={{ paddingBottom: 12, ...pdfTypography.title }}>
          Bank Details
        </Text>
        <View style={{ flexDirection: "column", gap: 5 }}>
          {tableRow('Bank Name', bankName)}
          {tableRow('Account Number', accountNumber)}
          {tableRow('Account Name', accountName)}
          {tableRow('Swift Code', swiftCode)}
          {ifscCode ? tableRow('IFSC Code', ifscCode) : null}
          {intermediaryBank ? tableRow('Intermediary Bank', intermediaryBank) : null}
          {routingCode ? tableRow('Routing Code', routingCode) : null}
          {currencyDetails?.currencyName ? tableRow('Payable In', currencyDetails?.currencyName) : null}
        </View>
      </View>
    </View>
  );
};
