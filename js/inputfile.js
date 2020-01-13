const inputFile = document.getElementById("inputFile"); //input
const previewContainer = document.getElementById("imagePreview");//div id
const previewImage = previewContainer.querySelector(".imgPreview");//img
const previewDefaultText = previewContainer.querySelector(".imagePreviewDefaultText");//span






inputFile.addEventListener("change", function() {
  let file = this.files[0];

  if(file){
  const reader = new FileReader();

    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function(){
      previewImage.setAttribute("src", this.result);
      console.log("url(" + this.result + ")");
      document.body.style.backgroundImage = "url(" + this.result + ")";
    });


    reader.readAsDataURL(file);



  }else{
    previewDefaultText.style.display = "null";
    previewImage.style.display = "null";
    previewImage.setAttribute("src", "");
  }
});
