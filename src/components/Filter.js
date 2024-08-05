import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ data, setFilteredData }) => {
  const initialFilters = {
    age: "",
    name: "",
    role: "",
    hireDate: "",
    isActive: "",
    salary: "",
    department: "",
    projectsCompleted: "",
    lastLogin: "",
    accessLevel: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const ApplyFilters = () => {
    let filtered = data;
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filtered = filtered.filter((item) =>
          String(item[key]).toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });
    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setFilteredData(data); // Reset the filtered data to the original data
  };

  return (
    <div className="filter-fields">
      <div className="filter-row">
        <div className="filter-field">
          <label className="filter-label" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="filter-input"
            placeholder="Filter by name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            className="filter-input"
            placeholder="Filter by age"
            value={filters.age}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            className="filter-input"
            placeholder="Filter by role"
            value={filters.role}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="hireDate">Hire Date</label>
          <input
            type="date"
            id="hireDate"
            name="hireDate"
            className="filter-input"
            placeholder="Filter by hire date"
            value={filters.hireDate}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="filter-row">
        <div className="filter-field">
          <label className="filter-label" htmlFor="isActive">Active Status</label>
          <select
            id="isActive"
            name="isActive"
            className="filter-input"
            value={filters.isActive}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Active Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="filter-input"
            placeholder="Filter by salary"
            value={filters.salary}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            className="filter-input"
            placeholder="Filter by department"
            value={filters.department}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="projectsCompleted">Projects Completed</label>
          <input
            type="number"
            id="projectsCompleted"
            name="projectsCompleted"
            className="filter-input"
            placeholder="Filter by projects completed"
            value={filters.projectsCompleted}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="filter-row">
        <div className="filter-field">
          <label className="filter-label" htmlFor="lastLogin">Last Login</label>
          <input
            type="datetime-local"
            id="lastLogin"
            name="lastLogin"
            className="filter-input"
            placeholder="Filter by last login"
            value={filters.lastLogin}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-field">
          <label className="filter-label" htmlFor="accessLevel">Access Level</label>
          <input
            type="text"
            id="accessLevel"
            name="accessLevel"
            className="filter-input"
            placeholder="Filter by access level"
            value={filters.accessLevel}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="filter-buttons">
        <button className="filter-button" onClick={ApplyFilters}>Apply Filters</button>
        <button className="filter-button" onClick={resetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
