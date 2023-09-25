export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(items) {
      return Object.keys(items).length;
    },
  };
}
