console.log("Craig D Murray, SPHR");


      // Get searcg forma nd page links
      let searchForm = document.getElementById('searchForm')
      let pageLinks = document.getElementsByClassName('page-link')

      // Ensure search for exists
      if(searchForm){
        for (let i = 0; pageLinks.length > 1; i ++){
          pageLinks[i].addEventListener('click', (function (e) {
            e.preventDefault()

            // Get data attributes
            let page = this.dataset.page

            // Add hidden search input
            searchForm.innerHTML += `<input value=${page} name="page" hidden/>`

            // Submit form
            searchForm.submit()

          }))
        }
      }
