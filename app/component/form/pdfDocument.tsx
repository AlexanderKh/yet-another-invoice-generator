import {Document, Page, View} from "@react-pdf/renderer";
import {YourDetailsPDF} from "./yourDetails/yourDetailsPdf";
import {InvoiceTermsPdf} from "./invoiceTerms/InvoiceTermsPdf";
import {CompanyDetailsPdf} from "./companyDetails/companyDetailsPdf";
import {InvoiceDetailsPdf} from "./invoiceDetails/invoiceDetailsPdf";
import {PaymentDetailsPdf} from "./paymentDetails/paymentDetailsPdf";
import {pdfContainers, pdfUtils} from "@/lib/pdfStyles";

export const PDFDocument = (
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
) => (
  <Document>
    <Page size="A4" style={pdfContainers.page}>
      <View>
        <InvoiceTermsPdf {...invoiceTerms} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            ...pdfUtils.borderTop,
            ...pdfUtils.borderBottom,
          }}
        >
          <YourDetailsPDF {...yourDetails} />
          <CompanyDetailsPdf {...companyDetails} />
        </View>
        <View>
          <View style={pdfUtils.borderBottom}>
            <InvoiceDetailsPdf {...invoiceDetails} />
          </View>
          <View>
            <PaymentDetailsPdf {...paymentDetails} />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
