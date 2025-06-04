import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import {defaultValue} from "@/app/(landing)/components/demoPreview";

export const CompanyDetailsForm = () => (
  <div>
    <p className="text-2xl font-semibold pb-3">Company Details (To)</p>
    <CustomTextInput
      label="Email"
      placeholder={defaultValue.companyDetails.email}
      variableName="email"
    />
    <p className="pb-2 pt-6 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder={defaultValue.companyDetails.companyName}
      variableName="companyName"
    />
    <CustomTextInput
      label="Address"
      placeholder={defaultValue.companyDetails.companyAddress}
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder={defaultValue.companyDetails.companyCity}
      variableName="companyCity"
    />
    <CustomTextInput
      label="State"
      placeholder={defaultValue.companyDetails.companyState}
      variableName="companyState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder={defaultValue.companyDetails.companyZip}
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder={defaultValue.companyDetails.companyCountry}
      variableName="companyCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder={defaultValue.companyDetails.companyTaxId}
      variableName="companyTaxId"
    />
  </div>
);
