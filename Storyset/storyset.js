 // let chapters = [];
 let titles = [];
 let intros = [];
 let stories = [];
 let output = {
     titless: titles,
     intross : intros,
     storiess : stories 
 }
 // console.log(output.storiess)
 errorCount = 0;
 addStory = () => {
     let title = document.querySelector('.title-add').value;
     let intro = document.querySelector('.intro-add').value;
     let story = document.querySelector('.story-add').value;
     

     if (title !== '' && intro !=='' && story !== '' ) {
     titles.push(title);
     intros.push(intro);
     stories.push(story);
     console.log(output.storiess);

     let outputString = JSON.stringify(output);
 console.log(outputString);

 localStorage.setItem("storyDetails", outputString);
 console.log(localStorage);

 document.querySelector('.title-add').value = " ";
 document.querySelector('.intro-add').value = " ";
 document.querySelector('.story-add').value = " ";

     document.querySelector('.error').style.display = "none";
     }
     else {
         if(errorCount == 0) {
         document.querySelector('.error').style.display = "block";
         document.querySelector('.error').insertAdjacentHTML("beforeend", `<p> There is a missing value </p>`);

     errorCount = 1;
     }
     else {
         document.querySelector('.error').style.display = "block"; 
     }
     }
 }

 export default output;