import { useState } from 'react';
import ProgressBar from '../progress-bar';

const Table = (): JSX.Element => {
  const [active, setActive] = useState(-1);
  function handleOpen(id: number) {
    setActive(active === id ? -1 : id);
  }
  const checkpoints = [
    'Ticket Created',
    'Investigated',
    'Esclalation',
    'Resolution',
    'Complete',
  ];
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
            <table className="min-w-full text-left text-sm font-light border border-gray-100">
              <thead className="border-b font-medium dark:border-gray-100 bg-red-100 text-white">
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
                    <>
                      <tr
                        className={`${
                          active === idx + 1 && 'bg-gray'
                        } border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:border dark:hover:bg-gray cursor-pointer`}
                        key={idx}
                        onClick={() => handleOpen(idx + 1)}
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
                      <div
                        className={`${
                          active !== idx + 1 && 'hidden'
                        } p-5 items-center absolute`}
                      >
                        <ProgressBar checkpoints={checkpoints} progress={2} />
                      </div>
                      <div
                        className={`${
                          active !== idx + 1 && 'hidden'
                        } p-5 items-center mb-8`}
                      ></div>
                    </>
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