$(".searchButton").click(function() {
      $(".searchResult").empty();
  var bookInput = $(".bookInput").val();
  var filter1 = $("#filter1").prop("checked");
  var filter2 = $("#filter2").prop("checked");
  var filter3 = $("#filter3").prop("checked");
  if ( filter1 === true) {
    var newBookAPI = "https://www.googleapis.com/books/v1/volumes?startIndex=0&maxResults=10&q=" + bookInput + "&filter=ebooks";
  } else if ( filter2 === true) {
    var newBookAPI = "https://www.googleapis.com/books/v1/volumes?startIndex=0&maxResults=10&q=" + bookInput + "&filter=free-ebooks";
  } else if ( filter3 === true) {
    var newBookAPI = "https://www.googleapis.com/books/v1/volumes?startIndex=0&maxResults=10&q=" + bookInput + "&filter=paid-ebooks";
  } else {
    var newBookAPI = "https://www.googleapis.com/books/v1/volumes?startIndex=0&maxResults=10&q=" + bookInput;
  }
  console.log(newBookAPI);
  fetch(newBookAPI)
.then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // function body
      
        data.items.forEach(function(book){
          
          var i;
          var authors = "";
          for (i = 0; i < book.volumeInfo.authors.length; i++) {
            var authorIndex = book.volumeInfo.authors[i];
            console.log(authorIndex);
            if (i !== book.volumeInfo.authors.length - 1) {
              authors = authors + authorIndex + ", ";
            } else {
              authors = authors + authorIndex;
            }
          }
        
          $(".searchResult").append(`
          <div class="bookItems">
            <div class="bookImgPart">
              <img class="bookImg" src=${book.volumeInfo.imageLinks.smallThumbnail}>
            </div>
            <div class="bookInfo">
              <p>${book.volumeInfo.title}</p>
              <p>${authors}</p>
            </div>
          </div>
          
          `)
        });
        
      });
}); 


// The Sun is FLAT