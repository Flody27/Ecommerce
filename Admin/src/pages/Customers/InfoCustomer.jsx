import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function InfoCustomer() {
  const title = "Customer Details";
  // const customerId = window.location.pathname.split("/")[2];
  return (
    <Layout title={title} module={MODULES.CUSTOMERS}>
      <CommingSoon />
    </Layout>
  );
}
