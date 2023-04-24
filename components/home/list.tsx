"use client"

import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import 'tailwindcss/tailwind.css';

const List = ( {data} ) => {
    console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: 'Product name',
        accessor: 'productName',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Total price',
        accessor: 'totalPrice',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
  );

  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns,
    data: tableData,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (<table {...getTableProps()} className="table-auto w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="p-2 font-bold text-left"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="p-2 border-t border-gray-200"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
