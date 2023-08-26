import Layout from '../../components/layout/Layout';
import Table from '../../components/table/Table';

const PastReports = (): JSX.Element => {
  return (
    <Layout>
      <div className="px-20 py-10">
        <h1 className="text-2xl font-bold mb-4">My Reports</h1>
        <Table />
      </div>
    </Layout>
  );
};

export default PastReports;
