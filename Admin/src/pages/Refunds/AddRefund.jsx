import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function AddRefund() {
  return (
    <Layout title="AddRefund" module={MODULES.REFUNDS}>
      <CommingSoon />
    </Layout>
  );
}
