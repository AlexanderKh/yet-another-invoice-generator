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

const defaultValue = {
  companyDetails: {
    companyName: "Example Co.",
    companyAddress: "1600 Amphitheatre Parkway",
    companyCity: "Mountain View",
    companyState: "CA",
    companyCountry: "USA",
    companyTaxId: "",
    companyZip: "94043",
    email: "josh@example.com",
  },
  yourDetails: {
    yourName: "Pranav Patel",
    yourAddress: "6th Main Rd, Eshwara Layout, Indiranagar,",
    yourCity: "Bengaluru",
    yourState: "Karnataka",
    yourCountry: "India",
    yourEmail: "hi@pranavp.xyz",
    yourTaxId: "",
    yourZip: "560038",
  },
  paymentDetails: {
    bankName: "Axis Bank",
    accountNumber: "1234567890",
    accountName: "ABCD",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    intermediaryBank: "Citibank",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
