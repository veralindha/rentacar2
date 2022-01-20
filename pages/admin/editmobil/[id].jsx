import Layout from "../../components/admin/layout";
import Editmobil from "../../components/admin/components/editMobil";
export async function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
const EditMobil = () => {
  return (
    <>
      <Layout>
        <Editmobil/>
      </Layout>
    </>
  );
};
export default EditMobil;
