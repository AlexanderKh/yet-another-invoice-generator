"use client"

import {PreviewDetails} from "@/app/component/form/previewDetails";
import {useEffect, useState} from "react";

const DemoPreview = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="mx-auto w-full h-full flex justify-center items-center">
      <PreviewDetails
        companyDetails={defaultValue.companyDetails}
        invoiceDetails={defaultValue.invoiceDetails}
        invoiceTerms={defaultValue.invoiceTerms}
        paymentDetails={defaultValue.paymentDetails}
        yourDetails={defaultValue.yourDetails}
      />
    </div>
  );
}

export const defaultValue = {
  companyDetails: {
    email: "ryleehood484@hotmail.org",
    companyName: "Arsenio Atkinson",
    companyAddress: "439-5451 At St.",
    companyCity: "Bolzano Vicentino",
    companyState: "Veneto",
    companyCountry: "Italy",
    companyZip: "11872",
    companyTaxId: "262462",
  },
  yourDetails: {
    yourEmail: "drakedennis@yahoo.couk",
    yourName: "Lane Fleming",
    yourAddress: "2192 Fusce St.",
    yourCity: "Mala",
    yourState: "Lima",
    yourCountry: "Peru",
    yourZip: "35978",
    yourTaxId: "866351",
  },
  paymentDetails: {
    bankName: "Axis Bank",
    accountNumber: "MR1275651338842265832542341",
    accountName: "Lane Fleming",
    routingInfo: "Routing Number: 12345",
    swiftBicCode: "MR12756",
    intermediaryBank: "Citibank",
    currency: "USD",
  },
  invoiceTerms: {
    invoiceNumber: "INV-25",
    issueDate: "Fri Apr 19 2024 00:00:00 UTC",
    dueDate: "Mon Apr 22 2024 00:00:00 UTC",
  },
  invoiceDetails: {
    note: "Services Period 21/03/2024 to 20/04/2024",
    discount: "200",
    taxRate: "25",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 2500,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 400,
      },
    ],
    currency: "USD",
  },
};
export default DemoPreview;
