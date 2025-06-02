import {PdfDetails} from "@/app/component/form/pdfDetails";
import {Document, Page, PDFViewer} from "@react-pdf/renderer";
import {pdfContainers} from "@/lib/pdfStyles";

export const PreviewDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
  onClick,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  onClick?: (step: string) => void;
}) => {
  return <PDFViewer width="100%" height="100%" showToolbar={false}>
    <Document>
      <Page size="A4" style={pdfContainers.page}>
        <PdfDetails
          companyDetails={companyDetails}
          invoiceDetails={invoiceDetails}
          invoiceTerms={invoiceTerms}
          paymentDetails={paymentDetails}
          yourDetails={yourDetails}
        />
      </Page>
    </Document>
  </PDFViewer>
}