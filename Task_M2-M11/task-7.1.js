let book = { title: "The Hobbit",
     author: "Tolkien",
      pages: 310 };
      delete book.pages;

      let key = Object.keys(book)
      let all=Object.entries(book)
      

      console.log(key)
      console.log(all)