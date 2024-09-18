function insert_Row() {
    // Get the reference of the table
    let table = document.getElementById("sampleTable");
    
    // Insert a new row at the beginning (index 0)
    let newRow = table.insertRow(0);
    
    // Insert a new cell for the first column (New Cell1)
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";
    
    // Insert a new cell for the second column (New Cell2)
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
