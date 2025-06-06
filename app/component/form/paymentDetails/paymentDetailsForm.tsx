import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import {defaultValue} from "@/app/component/demoPreview";

export const PaymentDetailsForm = () => (
  <div>
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank Name"
      placeholder={defaultValue.paymentDetails.bankName}
      variableName="bankName"
    />
    <CustomTextInput
      label="Account Number"
      placeholder={defaultValue.paymentDetails.accountNumber}
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder={defaultValue.paymentDetails.accountName}
      variableName="accountName"
    />
    <CustomTextInput
      label="Routing Information"
      placeholder={defaultValue.paymentDetails.routingInfo}
      variableName="routingInfo"
    />
    <CustomNumberInput
      label="SWIFT / BIC Code"
      placeholder={defaultValue.paymentDetails.swiftBicCode}
      variableName="swiftBicCode"
    />
    <CustomNumberInput
      label="Intermediary Bank"
      placeholder={defaultValue.paymentDetails.intermediaryBank}
      variableName="intermediaryBank"
    />
  </div>
);
