const fs = require('fs');

// Function to decode a number from a given base to decimal
function decodeValue(value, base) {
    return parseInt(value, base);  // Convert value from given base to decimal
}

// Function to apply Lagrange interpolation and find the constant term (c)
function lagrangeInterpolation(points) {
    let constant = 0.0;
    let k = points.length;

    // Loop through each point (xi, yi) as part of Lagrange basis
    for (let i = 0; i < k; ++i) {
        let term = points[i][1]; // Start with yi
        for (let j = 0; j < k; ++j) {
            if (i !== j) {
                // Multiply with (0 - xj) / (xi - xj)
                term *= (0 - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        constant += term;
    }

    return constant;
}

function main() {
    try {
        // Load JSON data from file
        const jsonData = fs.readFileSync('input.json', 'utf-8');
        const data = JSON.parse(jsonData);

        // Log the JSON data to see if it's being read correctly
        console.log(data);

        if (!data.testCases || !Array.isArray(data.testCases)) {
            throw new Error("Invalid JSON structure: 'testCases' section is missing or malformed.");
        }

        // Iterate through each test case
        data.testCases.forEach((testCase, index) => {
            if (!testCase.keys || !testCase.keys.n || !testCase.keys.k) {
                throw new Error(`Invalid JSON structure in test case ${index + 1}: 'keys' section is missing or malformed.`);
            }

            // Get values of n and k
            const n = testCase.keys.n;
            const k = testCase.keys.k;

            // Decode points from the JSON data
            const points = [];
            for (const key in testCase) {
                if (key === 'keys') continue;  // Skip "keys" entry

                const x = parseInt(key);  // Key as integer x
                const base = parseInt(testCase[key].base);
                const y_value = testCase[key].value;

                // Decode y from the given base
                const y = decodeValue(y_value, base);
                points.push([x, y]);  // Store (x, y) as an array
            }

            // Ensure we only use the minimum required points (k points)
            const requiredPoints = points.slice(0, k);

            // Calculate the constant term (c) using Lagrange interpolation
            const constantTerm = lagrangeInterpolation(requiredPoints);

            // Output the constant term
            console.log(`The constant term (c) of the polynomial for test case ${index + 1} is:`, constantTerm);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Run the main function
main();
