import {PDFDocument} from "@/app/component/form/pdfDocument";
import {FadeLoader} from "react-spinners";
import dynamic from "next/dynamic";

export const PreviewDetails = (
  {
    yourDetails,
    companyDetails,
    invoiceDetails,
    paymentDetails,
    invoiceTerms,
  }: {
    yourDetails: YourDetails;
    companyDetails: CompanyDetails;
    invoiceDetails: InvoiceItemDetails;
    paymentDetails: PaymentDetails;
    invoiceTerms: InvoiceTerms;
  }
) => {
  const PDFViewer = dynamic(
    () => import("./pdfViewer"),
    {
      ssr: false,
      loading: () => <div className="w-full h-full flex items-center justify-center"><FadeLoader/></div>,
    },
  );

  return <PDFViewer width="100%" height="100%" showToolbar={false}>
    <PDFDocument
      companyDetails={companyDetails}
      invoiceDetails={invoiceDetails}
      invoiceTerms={invoiceTerms}
      paymentDetails={paymentDetails}
      yourDetails={yourDetails}
    />
  </PDFViewer>;
}