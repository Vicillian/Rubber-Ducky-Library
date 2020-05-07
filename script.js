$(".searchButton").click(function() {
 $("body").append("<p>show</p>");
  var bookInput = $(".bookInput").val();
  var newBookAPI = "https://www.googleapis.com/books/v1/volumes?q=" + bookInput;
  console.log(newBookAPI);
  fetch(newBookAPI)
.then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // function body
        data.items.forEach(function(book){
          $(".listbar").append(`
          <div class="bookItems">
            <p>${book.volumeInfo.title}</p>
            <p>${book.volumeInfo.author}</p>
          </div>`)
        });
        
      });
}); 


// Vic- Imm really bad at api but I'll try I guess

// were you able to look at the data that's coming back here? https://www.googleapis.com/books/v1/volumes?q=harry%20potter
// in a new tab
// 