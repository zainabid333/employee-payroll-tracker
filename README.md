# Employee Management Script
This script is designed to manage employee data, calculate the average salary, select a random employee, and display the employee data in an HTML table. The script prompts the user to enter employee details and then performs several operations on the collected data.

# Table of Contents
- Features
- Usage
- Functions

# Features
- Collect employee data via prompts.
- Store employee data in an array.
- Calculate and display the average salary of all employees.
- Select and display a random employee.
- Display employee data in an HTML table.
- Sort employees by last name.
# Usage
1. Open the HTML file in a web browser.
2. Click on the "Add Employees" button.
3. Enter the employee details when prompted.
4. View the average salary, a random employee, and the sorted employee data in the console.
5. Check the HTML table for a displayed list of employees.
# Functions
### 'collectEmployees()'
- Collects employee data from user prompts. 
- Validates the entered salary to ensure it's a number. 
- Adds the collected data to the employees array.
-  Calls trackEmployeeData() to perform further operations on the collected data.

### 'displayAverageSalary(employeesArray)'
- Calculates the average salary of the employees. 
- Displays the average salary in the console.

### 'getRandomEmployee(employeesArray)'
- Selects a random employee from the array.
-  Displays the selected employee's details in the console.

### 'displayEmployees(employeesArray)'
- Displays the employee data in an HTML table.
-  Clears any existing data in the table before populating it with the latest employee data.

### 'trackEmployeeData()'
- Logs the employee data in a table format to the console.
-  Calls displayAverageSalary(), getRandomEmployee(), and displayEmployees().
-  Sorts the employees by last name before displaying them in the HTML table.

### Event Listener
Adds an event listener to the "Add Employees" button to trigger the collectEmployees() function when clicked.

## Screenshot
![Payroll Tracker](./images/Array%20Display.png)