const dscc = require('@google/dscc');
const viz = require('@google/dscc-scripts/viz/initialViz.js');
const local = require('./localMessage.js');

// change this to 'true' for local development
// change this to 'false' before deployment
export const LOCAL = true;

// write viz code here
const drawViz = (data) => {
  //console.log(data)

  //setting up crown svg

  //Gold crown
  const iconSvg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath1 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg1.setAttribute('fill', '#F8B64C');
  iconSvg1.setAttribute('viewBox', '0 0 64 64');
  iconSvg1.setAttribute('width', '60');
  iconSvg1.setAttribute('height', '60');
  //iconSvg.classList.add('post-icon');

  iconPath1.setAttribute(
    'd',
    "M58.7 13.5502C57.2863 12.4064 55.5048 11.816 53.6878 11.889C51.8709 11.9621 50.1426 12.6937 48.8253 13.9473C47.508 15.2009 46.6918 16.8909 46.5289 18.702C46.366 20.5131 46.8676 22.3216 47.94 23.7902L40 32.3402L35.49 16.6202C36.6946 15.9809 37.703 15.0264 38.4075 13.8587C39.1119 12.691 39.4861 11.3539 39.49 9.99018C39.4901 8.99811 39.2931 8.0159 38.9104 7.10059C38.5278 6.18528 37.9671 5.35511 37.261 4.65828C36.5548 3.96144 35.7173 3.41183 34.797 3.04136C33.8767 2.67089 32.8919 2.48693 31.9 2.50018C30.2349 2.5256 28.6257 3.10442 27.326 4.14541C26.0262 5.18639 25.1099 6.63032 24.7214 8.24959C24.3329 9.86887 24.4944 11.5714 25.1803 13.0888C25.8663 14.6061 27.0377 15.8521 28.51 16.6302L24 32.3402L16.1 23.7802C17.2267 22.2305 17.7159 20.3076 17.4666 18.4079C17.2173 16.5082 16.2485 14.7766 14.76 13.5702C13.3243 12.3653 11.4896 11.7416 9.61703 11.8219C7.74449 11.9023 5.9699 12.6808 4.64272 14.0042C3.31554 15.3276 2.53197 17.1 2.44632 18.9723C2.36067 20.8446 2.97915 22.6811 4.17996 24.1202C5.271 25.4631 6.79438 26.3856 8.48996 26.7302V56.0002C8.48996 56.7233 8.63255 57.4393 8.90958 58.1073C9.1866 58.7752 9.59263 59.382 10.1044 59.8928C10.6162 60.4037 11.2237 60.8086 11.8921 61.0844C12.5606 61.3602 13.2768 61.5015 14 61.5002H50C51.4587 61.5002 52.8576 60.9207 53.889 59.8893C54.9205 58.8578 55.5 57.4589 55.5 56.0002V26.7302C56.8945 26.4471 58.1796 25.7725 59.2047 24.7855C60.2299 23.7985 60.9526 22.5399 61.2883 21.1571C61.6241 19.7742 61.559 18.3243 61.1006 16.9772C60.6422 15.63 59.8095 14.4413 58.7 13.5502V13.5502Z"
  );
  //iconPath.setAttribute('stroke-linecap', 'round');
  //iconPath.setAttribute('stroke-linejoin', 'round');
  //iconPath.setAttribute('stroke-width', '2');

  iconSvg1.appendChild(iconPath1);

  //silver crown
  const iconSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg2.setAttribute('fill', '#bcbcbc');
  iconSvg2.setAttribute('viewBox', '0 0 64 64');
  iconSvg2.setAttribute('width', '50');
  iconSvg2.setAttribute('height', '50');
  //iconSvg.classList.add('post-icon');

  iconPath2.setAttribute(
    'd',
    "M58.7 13.5502C57.2863 12.4064 55.5048 11.816 53.6878 11.889C51.8709 11.9621 50.1426 12.6937 48.8253 13.9473C47.508 15.2009 46.6918 16.8909 46.5289 18.702C46.366 20.5131 46.8676 22.3216 47.94 23.7902L40 32.3402L35.49 16.6202C36.6946 15.9809 37.703 15.0264 38.4075 13.8587C39.1119 12.691 39.4861 11.3539 39.49 9.99018C39.4901 8.99811 39.2931 8.0159 38.9104 7.10059C38.5278 6.18528 37.9671 5.35511 37.261 4.65828C36.5548 3.96144 35.7173 3.41183 34.797 3.04136C33.8767 2.67089 32.8919 2.48693 31.9 2.50018C30.2349 2.5256 28.6257 3.10442 27.326 4.14541C26.0262 5.18639 25.1099 6.63032 24.7214 8.24959C24.3329 9.86887 24.4944 11.5714 25.1803 13.0888C25.8663 14.6061 27.0377 15.8521 28.51 16.6302L24 32.3402L16.1 23.7802C17.2267 22.2305 17.7159 20.3076 17.4666 18.4079C17.2173 16.5082 16.2485 14.7766 14.76 13.5702C13.3243 12.3653 11.4896 11.7416 9.61703 11.8219C7.74449 11.9023 5.9699 12.6808 4.64272 14.0042C3.31554 15.3276 2.53197 17.1 2.44632 18.9723C2.36067 20.8446 2.97915 22.6811 4.17996 24.1202C5.271 25.4631 6.79438 26.3856 8.48996 26.7302V56.0002C8.48996 56.7233 8.63255 57.4393 8.90958 58.1073C9.1866 58.7752 9.59263 59.382 10.1044 59.8928C10.6162 60.4037 11.2237 60.8086 11.8921 61.0844C12.5606 61.3602 13.2768 61.5015 14 61.5002H50C51.4587 61.5002 52.8576 60.9207 53.889 59.8893C54.9205 58.8578 55.5 57.4589 55.5 56.0002V26.7302C56.8945 26.4471 58.1796 25.7725 59.2047 24.7855C60.2299 23.7985 60.9526 22.5399 61.2883 21.1571C61.6241 19.7742 61.559 18.3243 61.1006 16.9772C60.6422 15.63 59.8095 14.4413 58.7 13.5502V13.5502Z"
  );
  //iconPath.setAttribute('stroke-linecap', 'round');
  //iconPath.setAttribute('stroke-linejoin', 'round');
  //iconPath.setAttribute('stroke-width', '2');

  iconSvg2.appendChild(iconPath2);

  //bronze crown
  const iconSvg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath3 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg3.setAttribute('fill', '#CD7F32');
  iconSvg3.setAttribute('viewBox', '0 0 64 64');
  iconSvg3.setAttribute('width', '40');
  iconSvg3.setAttribute('height', '40');
  //iconSvg.classList.add('post-icon');

  iconPath3.setAttribute(
    'd',
    "M58.7 13.5502C57.2863 12.4064 55.5048 11.816 53.6878 11.889C51.8709 11.9621 50.1426 12.6937 48.8253 13.9473C47.508 15.2009 46.6918 16.8909 46.5289 18.702C46.366 20.5131 46.8676 22.3216 47.94 23.7902L40 32.3402L35.49 16.6202C36.6946 15.9809 37.703 15.0264 38.4075 13.8587C39.1119 12.691 39.4861 11.3539 39.49 9.99018C39.4901 8.99811 39.2931 8.0159 38.9104 7.10059C38.5278 6.18528 37.9671 5.35511 37.261 4.65828C36.5548 3.96144 35.7173 3.41183 34.797 3.04136C33.8767 2.67089 32.8919 2.48693 31.9 2.50018C30.2349 2.5256 28.6257 3.10442 27.326 4.14541C26.0262 5.18639 25.1099 6.63032 24.7214 8.24959C24.3329 9.86887 24.4944 11.5714 25.1803 13.0888C25.8663 14.6061 27.0377 15.8521 28.51 16.6302L24 32.3402L16.1 23.7802C17.2267 22.2305 17.7159 20.3076 17.4666 18.4079C17.2173 16.5082 16.2485 14.7766 14.76 13.5702C13.3243 12.3653 11.4896 11.7416 9.61703 11.8219C7.74449 11.9023 5.9699 12.6808 4.64272 14.0042C3.31554 15.3276 2.53197 17.1 2.44632 18.9723C2.36067 20.8446 2.97915 22.6811 4.17996 24.1202C5.271 25.4631 6.79438 26.3856 8.48996 26.7302V56.0002C8.48996 56.7233 8.63255 57.4393 8.90958 58.1073C9.1866 58.7752 9.59263 59.382 10.1044 59.8928C10.6162 60.4037 11.2237 60.8086 11.8921 61.0844C12.5606 61.3602 13.2768 61.5015 14 61.5002H50C51.4587 61.5002 52.8576 60.9207 53.889 59.8893C54.9205 58.8578 55.5 57.4589 55.5 56.0002V26.7302C56.8945 26.4471 58.1796 25.7725 59.2047 24.7855C60.2299 23.7985 60.9526 22.5399 61.2883 21.1571C61.6241 19.7742 61.559 18.3243 61.1006 16.9772C60.6422 15.63 59.8095 14.4413 58.7 13.5502V13.5502Z"
  );
  //iconPath.setAttribute('stroke-linecap', 'round');
  //iconPath.setAttribute('stroke-linejoin', 'round');
  //iconPath.setAttribute('stroke-width', '2');

  iconSvg3.appendChild(iconPath3);

  // Container setup.
  let container = document.getElementById('container');
  if (container) {
    container.textContent = '';
  } else {
    container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container);
  }

  //array for top3
  let arr= [];

  data.tables.DEFAULT.forEach(function(value, index) {
    //console.log(value)
    Object.values(value).forEach((element)=> {
      arr.push(element)
    });
  });

  //array for storing the table data
  let tableData= [];
  let noofrows=0;
  //variable to store the input value which will set the number of rows to display per page
  let perpage= Math.max(data.style.tablerows.value, 1)
  //console.log(perpage)
  data.tables.DEFAULT.forEach(function(value, index) {
    if(noofrows<perpage){
      tableData.push(value);
      noofrows++
    }
  });

  //leaderboard
  let leaderboard= document.createElement("div")
  leaderboard.id="leaderboard"

  //displaying top3 positions at the top
  //first position
  let top1= tableData.slice(0, 1)
  let first=document.createElement('div')
  first.id= "first"
  let crown1=document.createElement('div')
  crown1.id= "crown1"
  crown1.appendChild(iconSvg1)
  let name1= document.createElement("div")
  name1.class= "name"
  name1.textContent= `${arr[0][0]}`
  let box1= document.createElement("div");
  box1.id= "box"

  top1.forEach(function(value, index) {
    Object.values(value).forEach((elements)=> {
      console.log(elements)
      elements.forEach((cell)=> {
        //console.log(cell)
        if(cell !== arr[0][0]){
          let details = document.createElement("div");
          if(typeof cell === "number"){
            details.textContent = cell.toLocaleString('en-IN');
          }
          else{
            details.textContent = cell;
          }
          box1.appendChild(details);
        }
      })
    });
  });

  first.appendChild(crown1)
  first.appendChild(name1)
  first.appendChild(box1)

  //second position
  let top2= tableData.slice(1, 2)
  let second=document.createElement('div')
  second.id= "second"
  let crown2=document.createElement('div')
  crown2.id= "crown1"
  crown2.appendChild(iconSvg2)
  let name2= document.createElement("div")
  name2.class= "name"
  name2.textContent= `${arr[2][0]}`
  let box2= document.createElement("div");
  box2.id= "box"

  top2.forEach(function(value, index) {
    Object.values(value).forEach((elements)=> {
      elements.forEach((cell)=> {
        //console.log(cell)
        if(cell !== arr[2][0]){
          let details = document.createElement("div");
          if(typeof cell === "number"){
            details.textContent = cell.toLocaleString('en-IN');;
          }
          else{
            details.textContent = cell;
          }
          box2.appendChild(details);
        }
      })
    });
  });
  second.appendChild(crown2)
  second.appendChild(name2)
  second.appendChild(box2)

  //third position
  let top3= tableData.slice(2, 3)
  let third=document.createElement('div')
  third.id= "third"
  let crown3=document.createElement('div')
  crown3.id= "crown3"
  crown3.appendChild(iconSvg3)
  let name3= document.createElement("div")
  name3.class= "name"
  name3.textContent= `${arr[4][0]}`
  let box3= document.createElement("div");
  box3.id= "box"

  top3.forEach(function(value, index) {
    Object.values(value).forEach((elements)=> {
      elements.forEach((cell)=> {
        //console.log(cell)
        if(cell !== arr[4][0]){
          let details = document.createElement("div");
          if(typeof cell === "number"){
            details.textContent = cell.toLocaleString('en-IN');;
          }
          else{
            details.textContent = cell;
          }
          box3.appendChild(details);
        }
      })
    });
  });

  third.appendChild(crown3)
  third.appendChild(name3)
  third.appendChild(box3)
  
  //appending everything to the DOM
  leaderboard.appendChild(second)
  leaderboard.appendChild(first)
  leaderboard.appendChild(third)
  container.appendChild(leaderboard)

  //rest of the table
  const table = document.createElement('table');
  table.id= "not_toppers"
  const tableHeader = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  //rendering the headers
  let th = document.createElement('th');
  th.textContent = "SNo."
  tableHeader.appendChild(th);

  Object.values(data.fields).forEach((elements) =>{
    elements.forEach((headers)=>{
      let th = document.createElement('th');
      th.textContent = headers.name
      tableHeader.appendChild(th);
    })
  })

  //logic for the Show Header checkbox in the viz
  //flag variable to decide to render the table including top3 or not depending on the checkbox value
  let flag;
  //for serial number
  let count;

  if(data.style.showBoard.value === true){
    flag=3;
    count=4;
    leaderboard.style.display= "flex"
  }else {
    flag=0;
    count=1;
    leaderboard.style.display= "none"
  }



  //rendering the table
  tableData.slice(flag).forEach(function(value, index) {
    let tableRow = document.createElement('tr');
    let tableCell = document.createElement('td');
    tableCell.textContent = count++;
    tableRow.appendChild(tableCell);
    
    Object.values(value).forEach((elements)=> {
      elements.forEach((cell)=> {
        //console.log(cell)
          let tableCell = document.createElement('td');
          if(typeof cell === "number"){
            tableCell.textContent = cell.toLocaleString('en-IN');
          }
          else tableCell.textContent = cell;
          tableRow.appendChild(tableCell);
        }
      )
  });
    tableBody.appendChild(tableRow);
  });
  
  table.appendChild(tableHeader);
  table.appendChild(tableBody);

  // Set header color based on style control.
  tableHeader.style.backgroundColor = data.style.headerBg.value.color;
  
  //render the table
  container.appendChild(table);
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}