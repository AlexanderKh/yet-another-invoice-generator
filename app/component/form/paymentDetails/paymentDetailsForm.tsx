import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div>
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank Name"
      placeholder="HSBC"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account Number"
      placeholder="8920804195"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Pranav"
      variableName="accountName"
    />
    <CustomTextInput
      label="Routing Information"
      placeholder="Routing Number: 12345"
      variableName="routingInfo"
    />
    <CustomNumberInput
      label="Swift Code"
      placeholder="HSBCINAA123"
      variableName="swiftCode"
    />
    <CustomNumberInput
      label="Intermediary Bank"
      placeholder="Citibank"
      variableName="intermediaryBank"
    />
  </div>
);
