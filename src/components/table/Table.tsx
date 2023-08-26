const Table = (): JSX.Element => {
  return (
    <div className="flex flex-col px-25">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light border border-gray-500">
              <thead className="border-b font-medium dark:border-gray-500 bg-gray-100">
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
                <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">test</td>
                  <td className="whitespace-nowrap px-6 py-4">test</td>
                  <td className="whitespace-nowrap px-6 py-4">Test</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
