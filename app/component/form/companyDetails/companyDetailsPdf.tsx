/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { pdfContainers, pdfTypography } from "@/lib/pdfStyles";

export const CompanyDetailsPdf: React.FC<CompanyDetails> = ({
  companyEmail,
  companyName,
  companyAddress,
  companyCity,
  companyState,
  companyCountry,
  companyTaxId,
  companyZip,
}) => (
  <View style={pdfContainers.CompanyDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>To</Text>
    {companyName && (
      <Text style={{ ...pdfTypography.text2xl, flexWrap: "wrap" }}>
        {companyName}
      </Text>
    )}
    <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
      {companyEmail || '‎'}
    </Text>
    <View style={pdfTypography.description}>
      {companyAddress && <Text>{companyAddress}</Text>}
      {(companyCity || companyState || companyZip) && (
        <Text style={{ marginBottom: 2 }}>
          {[[companyCity, companyState].filter(Boolean).join(', '), companyZip].filter(Boolean).join(' ')}
        </Text>
      )}
      {companyCountry && (
        <Text style={{ marginBottom: 4 }}>{companyCountry}</Text>
      )}
      {companyTaxId && <Text>Tax ID: {companyTaxId}</Text>}
    </View>
  </View>
);
