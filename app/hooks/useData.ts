import {useGetValue, useItemParams} from "@/app/hooks/useGetValue";

export const useData = () => {
  const yourEmail = useGetValue("yourEmail");
  const yourName = useGetValue("yourName");
  const yourAddress = useGetValue("yourAddress");
  const yourCity = useGetValue("yourCity");
  const yourState = useGetValue("yourState");
  const yourCountry = useGetValue("yourCountry");
  const yourTaxId = useGetValue("yourTaxId");
  const yourZip = useGetValue("yourZip");

  const companyEmail = useGetValue("companyEmail");
  const companyName = useGetValue("companyName");
  const companyAddress = useGetValue("companyAddress");
  const companyCity = useGetValue("companyCity");
  const companyState = useGetValue("companyState");
  const companyCountry = useGetValue("companyCountry");
  const companyTaxId = useGetValue("companyTaxId");
  const companyZip = useGetValue("companyZip");

  const note = useGetValue("note");
  const discount = useGetValue("discount");
  const taxRate = useGetValue("tax");
  const items = useItemParams();

  const bankName = useGetValue("bankName");
  const accountNumber = useGetValue("accountNumber");
  const accountName = useGetValue("accountName");
  const routingInfo = useGetValue("routingInfo");
  const swiftBicCode = useGetValue("swiftBicCode");
  const intermediaryBank = useGetValue("intermediaryBank");

  const invoiceNumber = useGetValue("invoiceNo");
  const issueDate = useGetValue("issueDate");
  const dueDate = useGetValue("dueDate");

  const currency = useGetValue("currency") || "EUR";

  const invoiceTerms = {
    invoiceNumber,
    issueDate,
    dueDate,
  };

  const invoiceDetails = {
    note,
    discount,
    taxRate,
    items,
    currency,
  };

  const paymentDetails = {
    bankName,
    accountNumber,
    accountName,
    routingInfo,
    swiftBicCode,
    intermediaryBank,
    currency,
  };

  const yourDetails = {
    yourName,
    yourAddress,
    yourCity,
    yourState,
    yourCountry,
    yourEmail,
    yourTaxId,
    yourZip,
  };

  const companyDetails = {
    companyName,
    companyAddress,
    companyCity,
    companyState,
    companyCountry,
    companyTaxId,
    companyZip,
    companyEmail,
  };

  return {
    companyDetails,
    yourDetails,
    paymentDetails,
    invoiceTerms,
    invoiceDetails,
  };
};
