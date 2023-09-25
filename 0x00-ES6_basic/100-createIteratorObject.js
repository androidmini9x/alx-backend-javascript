export default function createIteratorObject(report) {
  return (function* () {
    for (const dep in report.allEmployees) {
      for (const emp of report.allEmployees[dep]) {
        yield emp;
      }
    }
  }());
}
