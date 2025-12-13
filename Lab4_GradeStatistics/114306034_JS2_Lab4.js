    const mathInput = document.getElementById("mathInput");
    const englishInput = document.getElementById("englishInput");
    const submitBtn = document.getElementById("submitBtn");
    const tableBody = document.querySelector("#gradeTable tbody");

    const mathAvg = document.getElementById("mathAvg");
    const englishAvg = document.getElementById("englishAvg");
    const overallAvg = document.getElementById("overallAvg");

    submitBtn.addEventListener("click", function () {
        const math = Number(mathInput.value);
        const english = Number(englishInput.value);

        if (isNaN(math) || isNaN(english)) {
            alert("Please enter valid numbers");
            return;
        }

        const index = tableBody.rows.length + 1;
        const avg = ((math + english) / 2).toFixed(2);

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${index}</td>
            <td>${math}</td>
            <td>${english}</td>
            <td>${avg}</td>
        `;

        tableBody.appendChild(newRow);
        updateColumnAverages();

        mathInput.value = "";
        englishInput.value = "";
    });

    function updateColumnAverages() {
        const rows = tableBody.querySelectorAll("tr");

        let mathTotal = 0;
        let englishTotal = 0;

        rows.forEach(row => {
            mathTotal += Number(row.children[1].innerText);
            englishTotal += Number(row.children[2].innerText);
        });

        const count = rows.length;
        if (count === 0) return;

        mathAvg.innerText = (mathTotal / count).toFixed(2);
        englishAvg.innerText = (englishTotal / count).toFixed(2);
        overallAvg.innerText = ((mathTotal + englishTotal) / (count * 2)).toFixed(2);
    }

