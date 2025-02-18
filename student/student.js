async function getUsers() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzJMGCKALdtkvldIHxWeY7FP79ebIhjuHAiBepNetsnzCpm2DZF3o6QkXsAqIgfQjek/exec',
        {
          method: 'GET',
        },
      );
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  getUsers().then(data => {
  
      //  totalStudent
      const totalStudent=parseInt(data[2].F);
      //student list
      let studentNDiv=document.getElementById('studentNDiv');
  
      let sList=document.createElement('div');
      sList.className='sList';
      studentNDiv.appendChild(sList);
  
  const studentNames = []; 
  
  function getStudentNames(sdat) {
      studentNames.push(sdat);
  }
  for(let i=0;i<=totalStudent-1;i++){
      let sdat=data[30*i+5].D;
      let sName=getStudentNames(sdat);
  }
  
  
  // Example student names
   studentNames.forEach((studentName,index)=>{
      let sItem=document.createElement('button');
      sItem.innerText=`${index+1}.${studentName}`;   
      sItem.id=`student${index}`;
      sItem.className=`student${index}`;
      sList.appendChild(sItem);
  });
  
  document.querySelectorAll('.sList button').forEach((button, index) => {
      button.addEventListener('click', () => {
          document.querySelectorAll('.studentTables').forEach((studentDiv) => {
              studentDiv.style.display = 'none';
          });
  
          document.querySelector(`.studentTables.student${index+1}`).style.display = 'block';
      });
  });
  
    
  
  
          // Function to create a table element
          function createTable(id, className, data) {
              const table = document.createElement('table');
              table.id = id;
              table.className = className;
  
              data.forEach((rowData ,rowIndex)=> {
                  const row = document.createElement('tr');
                  rowData.forEach((cellData,cellIndex) => {
                      const cell = document.createElement('td');
                      cell.id = `${id}_row${rowIndex + 1}_td${cellIndex + 1}`;
  cell.className = `${id}_td${cellIndex + 1}`;
                      cell.innerText = cellData;
                      row.appendChild(cell);
                  });
                  table.appendChild(row);
              });
  
              return table;
          }
  
          // Example data for students
          const exampleData = [];
          const picLinks=[];
  for(let i=0;i<=totalStudent-1;i++){
   let newStudent= { data1: [[data[30*i+5].C, data[30*i+5].D], [data[30*i+6].C, data[30*i+6].D], [data[30*i+7].C, data[30*i+7].D], [data[30*i+8].C, data[30*i+8].D], [data[30*i+9].C, data[30*i+9].D], [data[30*i+10].C, data[30*i+10].D],[data[30*i+11].C, data[30*i+11].D]],
     data2: [[data[30*i+12].C, data[30*i+12].D,data[30*i+12].E,data[30*i+12].F,data[30*i+12].G,data[30*i+12].H,data[30*i+12].I], [data[30*i+13].C, data[30*i+13].D,data[30*i+13].E,data[30*i+13].F,data[30*i+13].G,data[30*i+13].H,data[30*i+13].I]],
     data3: [[data[30*i+15].C,data[30*i+15].D,data[30*i+15].E],
      [data[30*i+16].C,data[30*i+16].D,data[30*i+16].E],
       [data[30*i+17].C,data[30*i+17].D,data[30*i+17].E],
       [data[30*i+18].C,data[30*i+18].D,data[30*i+18].E],
       [data[30*i+19].C,data[30*i+19].D,data[30*i+19].E],
        [data[30*i+20].C,data[30*i+20].D,data[30*i+20].E],
          [data[30*i+21].C,data[30*i+21].D,data[30*i+21].E],
            [data[30*i+22].C,data[30*i+22].D,data[30*i+22].E],
            [data[30*i+23].C,data[30*i+23].D,data[30*i+23].E],
              [data[30*i+24].C,data[30*i+24].D,data[30*i+24].E],
              [data[30*i+25].C,data[30*i+25].D,data[30*i+25].E],
                [data[30*i+26].C,data[30*i+26].D,data[30*i+26].E],
                  [data[30*i+27].C,data[30*i+27].D,data[30*i+27].E],
                    [data[30*i+28].C,data[30*i+28].D,data[30*i+28].E],
                    
      ] };
      exampleData.push(newStudent);
      picLinks.push(data[30*i+5].I);
  }
  
  
          // Iterate and create 3 tables for each student
          exampleData.forEach((studentData,index) => {
              const studentDiv = document.createElement('div');
              studentDiv.className = `studentTables student${index + 1}`;
              const profilePic=document.createElement('img');
              profilePic.src=picLinks[index];
              profilePic.alt="";
           studentDiv.appendChild(profilePic);
              tablesDiv.appendChild(studentDiv);
  
              // Create 3 tables per student
              for (let i = 1; i <= 3; i++) {
                  const id = `table${index + 1}_${i}`;
                  const className = `tableClass${i}`;
                  const data = studentData[`data${i}`];
  
                  const table = createTable(id, className, data);
                  studentDiv.appendChild(table);
              }
          });
  
  
      }
     );