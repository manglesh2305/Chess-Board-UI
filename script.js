let m = 8, n = 8;
let board = document.querySelector(".board");
let color = "white";
for(let i=0;i<m;i++){
    let row = document.createElement("div");
    row.setAttribute("class","row");
    if(i%2==0) color = "white";
    else{
        color = "black";
    }
    if(i ===0 || i===1){
        row.classList.add("black");
    }
    if(i===6 || i===7){
        row.classList.add("white");
    }
    for(let j=0;j<n;j++){
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("rid",i);
        box.setAttribute("cid",j);
        if(color === 'white'){
            box.style.backgroundColor = "white";
            color = "black";
        }
        else{
            box.style.backgroundColor = "black";
            color = "white";
        }
        row.appendChild(box);
    }
    board.appendChild(row);
}

let topWhiteCell = ["&#9814","&#9816", "&#9815", "&#9812", "&#9813", "&#9815", "&#9816", "&#9814"];
let topBlackCell = ["&#9820","&#9822", "&#9821", "&#9819", "&#9818", "&#9821", "&#9822", "&#9820"];
for(let i=0;i<m;i++){
    let cell = document.querySelector(`.box[rid="${0}"][cid="${i}"]`);
    let pieceBox = document.createElement("div");
    pieceBox.setAttribute("class","pieceBox");
    pieceBox.setAttribute("id","white");
    pieceBox.innerHTML = topWhiteCell[i];
    cell.appendChild(pieceBox);
}
for(let i=0;i<m;i++){
    let cell = document.querySelector(`.box[rid="${7}"][cid="${i}"]`);
    let pieceBox = document.createElement("div");
    pieceBox.setAttribute("class","pieceBox");
    pieceBox.setAttribute("id","black");
    pieceBox.innerHTML = topBlackCell[i];
    cell.appendChild(pieceBox);
}
for(let i=0;i<m;i++){
    let cell = document.querySelector(`.box[rid="${1}"][cid="${i}"]`);
    let pieceBox = document.createElement("div");
    pieceBox.setAttribute("class","pieceBox");
    pieceBox.setAttribute("id","white");
    pieceBox.innerHTML = "&#9817";
    cell.appendChild(pieceBox);
}
for(let i=0;i<m;i++){
    let cell = document.querySelector(`.box[rid="${6}"][cid="${i}"]`);
    let pieceBox = document.createElement("div");
    pieceBox.setAttribute("class","pieceBox");
    pieceBox.setAttribute("id","black");
    pieceBox.innerHTML = "&#9823";
    cell.appendChild(pieceBox);
}
