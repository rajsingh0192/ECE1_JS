let employees = [];

document.getElementById("addEmployee").addEventListener("click", () => {
    const name = document.getElementById("empName").value.trim();
    const id = document.getElementById("empID").value.trim();
    const salary = parseFloat(document.getElementById("empSalary").value);
    const dept = document.getElementById("empDept").value.trim();

    if (name && id && !isNaN(salary) && dept) {
        const employee = { name, id, salary, dept };
        employees.push(employee);
        alert("Employee added successfully!");
        document.getElementById("empName").value = "";
        document.getElementById("empID").value = "";
        document.getElementById("empSalary").value = "";
        document.getElementById("empDept").value = "";
    } else {
        alert("Please fill all fields correctly!");
    }
});

document.getElementById("displayAll").addEventListener("click", () => {
    let output = "<h3>All Employees:</h3>";
    employees.forEach(emp => {
        output += `<p>Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.dept}</p>`;
    });
    document.getElementById("output").innerHTML = output;
});

document.getElementById("filterSalary").addEventListener("click", () => {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "<h3>Employees with Salary > ₹50,000:</h3>";
    filtered.forEach(emp => {
        output += `<p>Name: ${emp.name}, Salary: ₹${emp.salary}</p>`;
    });
    document.getElementById("output").innerHTML = output;
});

document.getElementById("totalSalary").addEventListener("click", () => {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>Total Salary Payout: ₹${total}</h3>`;
});

document.getElementById("avgSalary").addEventListener("click", () => {
    if (employees.length > 0) {
        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        let avg = total / employees.length;
        document.getElementById("output").innerHTML = `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
    } else {
        document.getElementById("output").innerHTML = "<h3>No employees available.</h3>";
    }
});

document.getElementById("countDept").addEventListener("click", () => {
    let dept = prompt("Enter department name to count:");
    if (dept) {
        let count = employees.filter(emp => emp.dept.toLowerCase() === dept.toLowerCase()).length;
        document.getElementById("output").innerHTML = `<h3>Employees in ${dept}: ${count}</h3>`;
    }
});