Shamir's Secret Sharing - Constant Term Calculator
This project implements a simplified version of Shamir's Secret Sharing algorithm to find the constant term of a polynomial given its roots. The algorithm uses Lagrange interpolation to compute the constant term based on the provided data in JSON format.

Overview
Shamir's Secret Sharing is a cryptographic algorithm that divides a secret into parts, giving each participant a unique part. In this simplified version, we focus on determining the constant term of a polynomial based on its roots.

Polynomial Representation
An unknown polynomial of degree 
𝑚
m can be represented as:

𝑓
(
𝑥
)
=
𝑎
𝑚
𝑥
𝑚
+
𝑎
𝑚
−
1
𝑥
𝑚
−
1
+
…
+
𝑎
1
𝑥
+
𝑐
f(x)=a 
m
​
 x 
m
 +a 
m−1
​
 x 
m−1
 +…+a 
1
​
 x+c

Where:

𝑚
m is the degree of the polynomial.
𝑎
𝑚
,
𝑎
𝑚
−
1
,
…
,
𝑎
1
,
𝑐
a 
m
​
 ,a 
m−1
​
 ,…,a 
1
​
 ,c are the coefficients.
The highest degree term is 
𝑎
𝑚
𝑥
𝑚
a 
m
​
 x 
m
  with 
𝑎
𝑚
≠
0
a 
m
​
 

=0.
Input Structure
The input is provided in a JSON format containing multiple test cases. Each test case specifies:

The number of roots 
𝑛
n and the minimum number of roots 
𝑘
k required to determine the polynomial's coefficients.
Each root is represented with its base and corresponding value.
Example JSON Input
json
Copy code
{
    "testCases": [
        {
            "keys": {
                "n": 4,
                "k": 3
            },
            "1": {
                "base": "10",
                "value": "4"
            },
            "2": {
                "base": "2",
                "value": "111"
            },
            "3": {
                "base": "10",
                "value": "12"
            },
            "6": {
                "base": "4",
                "value": "213"
            }
        },
        {
            "keys": {
                "n": 10,
                "k": 7
            },
            "1": {
                "base": "6",
                "value": "13444211440455345511"
            },
            "2": {
                "base": "15",
                "value": "aed7015a346d63"
            },
            "3": {
                "base": "15",
                "value": "6aeeb69631c227c"
            },
            "4": {
                "base": "16",
                "value": "e1b5e05623d881f"
            },
            "5": {
                "base": "8",
                "value": "316034514573652620673"
            },
            "6": {
                "base": "3",
                "value": "2122212201122002221120200210011020220200"
            },
            "7": {
                "base": "3",
                "value": "20120221122211000100210021102001201112121"
            },
            "8": {
                "base": "6",
                "value": "20220554335330240002224253"
            },
            "9": {
                "base": "12",
                "value": "45153788322a1255483"
            },
            "10": {
                "base": "7",
                "value": "1101613130313526312514143"
            }
        }
    ]
}
Packages Used
This project uses the following package:

Node.js: A JavaScript runtime for executing the script.
No additional libraries are required, as the project relies on built-in Node.js modules.

Steps to Run the Project
Install Node.js: Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

Clone the Repository: Clone this repository to your local machine using:

bash
Copy code
git clone <repository-url>
Navigate to the Project Directory:

bash
Copy code
cd <project-directory>
Create Input File: Create a file named input.json in the project directory and add the JSON input structure described above.

Run the Script: Execute the script using Node.js:

bash
Copy code
node test.js
View the Output: The program will output the constant term (c) for each test case.

Example Output
bash
Copy code
The constant term (c) of the polynomial for test case 1 is: <value>
The constant term (c) of the polynomial for test case 2 is: <value>
Conclusion
This project demonstrates the application of Lagrange interpolation to compute the constant term of a polynomial based on its roots, which can be useful in cryptographic schemes like Shamir's Secret Sharing.

