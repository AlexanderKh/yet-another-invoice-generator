"use client";
import {PreviewDetails} from "@/app/component/form/previewDetails";
import {useData} from "@/app/hooks/useData";
import debounceRender from "react-debounce-render";

const DebouncedPreviewDetails = debounceRender(PreviewDetails, 1000, {
  maxWait: 2500,
  trailing: true,
});

export const UserDataPreview = () => {
  const {
    companyDetails,
    invoiceDetails,
    invoiceTerms,
    paymentDetails,
    yourDetails,
  } = useData();

  return (
    <DebouncedPreviewDetails
      companyDetails={companyDetails}
      invoiceDetails={invoiceDetails}
      invoiceTerms={invoiceTerms}
      paymentDetails={paymentDetails}
      yourDetails={yourDetails}
    />
  );
};
