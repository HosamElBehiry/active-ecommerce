import PaymentGateways from "@/components/Payment/PaymentGateways";
import PaymentSummary from "@/components/Payment/PaymentSummary";
import Steps from "@/components/Payment/Steps";

function Index() {
  return (
    <Steps step={4}>
      <div className="my-6 grid grid-cols-12 gap-4">
        <PaymentGateways />
        <PaymentSummary />
      </div>
    </Steps>
  );
}

export default Index;
