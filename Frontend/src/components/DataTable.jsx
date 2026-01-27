import React, { useState } from 'react';

const DataTable = ({ data, columns }) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    if (!data || data.length === 0) {
        return (
            <div className="p-10 text-center bg-white rounded-lg border">
                <p className="text-gray-500 font-medium">No data matches your filter.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
            <table className="table table-auto w-full border-collapse">
                <thead className="bg-gray-100 text-blue-950 sticky top-0 z-10">
                <tr>
                    {columns.map((col, index) => (
                        <th
                            key={index}
                            className="capitalize text-xs font-bold p-3 text-left border-b border-gray-300
                                       whitespace-normal break-words leading-tight align-top"
                            // Control the column width here to force wrapping
                            style={{ maxWidth: '100px', width: '100px' }}
                        >
                            {col.replace(/_/g, ' ')}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => {
                    const isSelected = selectedRowIndex === rowIndex;

                    return (
                        <tr
                            key={`row-${rowIndex}`}
                            onClick={() => setSelectedRowIndex(rowIndex)}
                            className={`
                                cursor-pointer transition-colors duration-150
                                ${isSelected ? 'bg-blue-200' : 'hover:bg-blue-50 odd:bg-white even:bg-gray-50'}
                            `}
                        >
                            {columns.map((col, colIndex) => (
                                <td
                                    key={`${rowIndex}-${colIndex}`}
                                    className="p-3 text-sm border-b border-gray-100"
                                >
                                    <div className="line-clamp-2" title={row[col]}>
                                        {row[col]}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;