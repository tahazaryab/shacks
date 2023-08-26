const Table = (): JSX.Element => {
  const reports = [
    {
      name: 'Stolen Card',
      status: 'Recieved',
      date: '20 min ago',
    },
    {
      name: 'Lost Card',
      status: 'Recieved',
      date: '20 min ago',
    },
    {
      name: 'Stolen Card',
      status: 'Recieved',
      date: '20 min ago',
    },
    {
      name: 'Lost Card',
      status: 'Recieved',
      date: '20 min ago',
    },
    {
      name: 'Stolen Card',
      status: 'Recieved',
      date: '20 min ago',
    },
  ];
  return (
    <div className="flex flex-col px-25">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light border border-gray-500">
              <thead className="border-b font-medium dark:border-gray-500 bg-red-100 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {reports?.map((report: any, idx: number) => {
                  return (
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-100"
                      key={idx}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {report.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {report.status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {report.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
