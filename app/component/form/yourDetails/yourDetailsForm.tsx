import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import {defaultValue} from "@/app/(landing)/components/demoPreview";

export const YourDetailsForm = () => (
  <div>
    <p className="text-2xl font-semibold pb-3">Your Details (From)</p>
    <CustomTextInput
      label="Your Email"
      placeholder={defaultValue.yourDetails.yourEmail}
      variableName="yourEmail"
    />
    <p className="pb-2 pt-6 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Your Name"
      placeholder={defaultValue.yourDetails.yourName}
      variableName="yourName"
    />
    <CustomTextInput
      label="Address"
      placeholder={defaultValue.yourDetails.yourAddress}
      variableName="yourAddress"
    />
    <CustomTextInput
      label="City"
      placeholder={defaultValue.yourDetails.yourCity}
      variableName="yourCity"
    />
    <CustomTextInput
      label="State"
      placeholder={defaultValue.yourDetails.yourState}
      variableName="yourState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder={defaultValue.yourDetails.yourZip}
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder={defaultValue.yourDetails.yourCountry}
      variableName="yourCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder={defaultValue.yourDetails.yourTaxId}
      variableName="yourTaxId"
    />
  </div>
);
