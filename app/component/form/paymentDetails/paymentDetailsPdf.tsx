/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

interface PaymentDetailsPdfProps extends PaymentDetails {
  countryImageUrl: string;
}

export const PaymentDetailsPdf: React.FC<PaymentDetailsPdfProps> = ({
  bankName,
  accountNumber,
  accountName,
  routingCode,
  swiftCode,
  ifscCode,
  currency = "INR",
  countryImageUrl,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
  )?.details;

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
          <View style={pdfUtils.flexRowItemCenter}>
            <Text style={pdfTypography.paymentTitle}>Bank Name</Text>
            <Text
              style={{
                flex: 1,
                ...pdfTypography.itemDescription,
                paddingLeft: 44.5,
              }}
            >
              {bankName ? bankName : "-"}
            </Text>
          </View>
          <View style={pdfUtils.flexRowItemCenter}>
            <Text style={pdfTypography.paymentTitle}>Account Number</Text>
            <Text
              style={{
                flex: 1,
                ...pdfTypography.itemDescription,
                paddingLeft: 14,
              }}
            >
              {accountNumber ? accountNumber : "-"}
            </Text>
          </View>
          <View style={pdfUtils.flexRowItemCenter}>
            <Text style={pdfTypography.paymentTitle}>Account Name</Text>
            <Text
              style={{
                flex: 1,
                ...pdfTypography.itemDescription,
                paddingLeft: 26,
              }}
            >
              {accountName ? accountName : "-"}
            </Text>
          </View>
          <View style={pdfUtils.flexRowItemCenter}>
            <Text style={pdfTypography.paymentTitle}>Swift Code</Text>
            <Text
              style={{
                flex: 1,
                ...pdfTypography.itemDescription,
                paddingLeft: 45,
              }}
            >
              {swiftCode ? swiftCode : "-"}
            </Text>
          </View>
          {ifscCode ? (
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={pdfTypography.paymentTitle}>IFSC Code</Text>
              <Text
                style={{
                  flex: 1,
                  ...pdfTypography.itemDescription,
                  paddingLeft: 48,
                }}
              >
                {ifscCode}
              </Text>
            </View>
          ) : undefined}
          {routingCode ? (
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={pdfTypography.paymentTitle}>Routing Code</Text>
              <Text
                style={{
                  flex: 1,
                  ...pdfTypography.itemDescription,
                  paddingLeft: 32,
                }}
              >
                {routingCode}
              </Text>
            </View>
          ) : undefined}
          <View style={pdfUtils.flexRowItemCenter}>
            <Text style={pdfTypography.paymentTitle}>Payable In</Text>
            <Text
              style={{
                flex: 1,
                ...pdfTypography.itemDescription,
                paddingLeft: 50,
              }}
            >
              {currencyDetails?.currencyName}
              {/*<Text style={{ fontSize: 14, fontWeight: "medium" }}>*/}
              {/*  */}
              {/*</Text>*/}
              {/*<Text style={pdfTypography.title}>*/}
              {/*  {currencyDetails?.currencySymbol}{" "}*/}
              {/*  {currencyDetails?.currencyShortForm}*/}
              {/*</Text>*/}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
