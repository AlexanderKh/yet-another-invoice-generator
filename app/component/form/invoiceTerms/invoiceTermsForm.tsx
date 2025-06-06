"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";
import {defaultValue} from "@/app/component/demoPreview";

export const InvoiceTermsForm = () => (
  <div>
    <p className="text-2xl font-semibold pb-3">Invoice terms</p>
    <CustomTextInput
      label="Invoice number"
      placeholder={defaultValue.invoiceTerms.invoiceNumber}
      variableName="invoiceNo"
    />
    <DateInput label="Issue date" variableName="issueDate" />
    <DateInput label="Due date" variableName="dueDate" />
  </div>
);
