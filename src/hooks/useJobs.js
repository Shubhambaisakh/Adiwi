import { useState, useMemo } from "react";
import { JOBS_DATA } from "../data/jobsData";

const useJobs = () => {
  // 1. Centralized Filter State
  const [filters, setFilters] = useState({
    search: "",
    department: "All",
    experience: "All",
    type: "All",
  });

  // 2. Logic to clear all filters
  const clearFilters = () => {
    setFilters({
      search: "",
      department: "All",
      experience: "All",
      type: "All",
    });
  };

  // 3. Memoized filtering logic (Prevents unnecessary re-renders)
  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      // Search matching (Title or Department)
      const matchesSearch =
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.department.toLowerCase().includes(filters.search.toLowerCase());

      // Dropdown matching
      const matchesDept =
        filters.department === "All" || job.department === filters.department;
      
      const matchesExp =
        filters.experience === "All" || job.experience === filters.experience;

      const matchesType =
        filters.type === "All" || job.type === filters.type;

      return matchesSearch && matchesDept && matchesExp && matchesType;
    });
  }, [filters]);

  // 4. Return everything the components need
  return {
    filters,
    setFilters,
    clearFilters,
    filteredJobs,
    totalCount: JOBS_DATA.length,
    resultCount: filteredJobs.length,
  };
};

export default useJobs;