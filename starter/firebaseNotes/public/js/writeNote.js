const messageRef=firebase.database().ref();
const noteTitle=document.querySelector("#noteTitle");
const noteText=document.querySelector("#noteText");
const noteLabel=document.querySelector("#noteLabel");

window.onload= (event) =>{
    console.log("window loaded");
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          console.log(user);  
        }else{
            window.location = "index.html";
        }
    })
};

const handleNoteSubmit = () =>{
            console.log("title: "+noteTitle.value);
            console.log("note: "+ noteText.value);
            messageRef.push({
                title: noteTitle.value,
                label: noteLabel.value,
                note: noteText.value
            })
    }

document.querySelector("#newNoteButton").addEventListener('click', (e) =>{
    handleNoteSubmit();
    noteTitle.innerHTML="";
    noteText.innerHTML="";
})
