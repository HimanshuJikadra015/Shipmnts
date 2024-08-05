import React, { useState, useMemo } from "react";
import "./Table.css";

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const getSortIcon = (name) => {
    if (!sortConfig || sortConfig.key !== name) {
      return null;
    }
    return sortConfig.direction === "ascending" ? "↑" : "↓";
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => requestSort('id')} className={getClassNamesFor("id")}>ID {getSortIcon("id")}</th>
          <th onClick={() => requestSort('name')} className={getClassNamesFor("name")}>Name {getSortIcon("name")}</th>
          <th onClick={() => requestSort('age')} className={getClassNamesFor("age")}>Age {getSortIcon("age")}</th>
          <th onClick={() => requestSort('role')} className={getClassNamesFor("role")}>Role {getSortIcon("role")}</th>
          <th onClick={() => requestSort('hireDate')} className={getClassNamesFor("hireDate")}>Hire Date {getSortIcon("hireDate")}</th>
          <th onClick={() => requestSort('isActive')} className={getClassNamesFor("isActive")}>Active {getSortIcon("isActive")}</th>
          <th onClick={() => requestSort('salary')} className={getClassNamesFor("salary")}>Salary {getSortIcon("salary")}</th>
          <th onClick={() => requestSort('department')} className={getClassNamesFor("department")}>Department {getSortIcon("department")}</th>
          <th onClick={() => requestSort('projectsCompleted')} className={getClassNamesFor("projectsCompleted")}>Projects Completed {getSortIcon("projectsCompleted")}</th>
          <th onClick={() => requestSort('lastLogin')} className={getClassNamesFor("lastLogin")}>Last Login {getSortIcon("lastLogin")}</th>
          <th onClick={() => requestSort('accessLevel')} className={getClassNamesFor("accessLevel")}>Access Level {getSortIcon("accessLevel")}</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.role}</td>
            <td>{item.hireDate}</td>
            <td>{item.isActive? "Active":"InActive"}</td>
            <td>{item.salary}</td>
            <td>{item.department}</td>
            <td>{item.projectsCompleted}</td>
            <td>{item.lastLogin}</td>
            <td>{item.accessLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;