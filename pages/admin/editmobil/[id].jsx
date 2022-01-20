import Layout from "../../components/admin/layout";
import EditMobil from "../../components/admin/components/editMobil";
export async function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
const EditMobil = () => {
  return (
    <>
      <Layout>
        <EditMobil/>
      </Layout>
    </>
  );
};
export default EditMobil;
