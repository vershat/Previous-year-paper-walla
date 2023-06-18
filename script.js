document.addEventListener('DOMContentLoaded', function() {
    var branchLinks = document.querySelectorAll('.branch-link');
    var previousPapersSection = document.getElementById('previous-papers');
    var bookLinksSection = document.getElementById('book-links');
    var searchForm = document.getElementById('search-form');
    var searchInput = document.getElementById('search-input');
    var contributeForm = document.getElementById('contribute-form');
    var semesterSelect = document.createElement('select');
    semesterSelect.id = 'semester-select';
  
    function loadPreviousYearPapers(branch, semester) {
      // Replace with your code to fetch and display the previous year papers
      previousPapersSection.innerHTML = '<h3>' + branch + ' - Semester ' + semester + ' Previous Year Papers</h3>' +
        '<ul>' +
        '<li><a href="#">Paper 1</a></li>' +
        '<li><a href="#">Paper 2</a></li>' +
        '<li><a href="#">Paper 3</a></li>' +
        '</ul>';
    }
  
    function loadBookLinks(branch, semester) {
      // Replace with your code to fetch and display the book links
      bookLinksSection.innerHTML = '<h3>' + branch + ' - Semester ' + semester + ' Book Links</h3>' +
        '<ul>' +
        '<li><a href="#">Book 1</a></li>' +
        '<li><a href="#">Book 2</a></li>' +
        '<li><a href="#">Book 3</a></li>' +
        '</ul>';
    }
  
    function populateSemesters(branch) {
      // Replace with your code to fetch and populate the semester options
      // Here, I'm populating the options statically for demonstration
      var semesters = ['1', '2', '3'];
      var options = '';
      for (var i = 0; i < semesters.length; i++) {
        options += '<option value="' + semesters[i] + '">Sem ' + semesters[i] + '</option>';
      }
      semesterSelect.innerHTML = options;
    }
  
    function handleSearchQuery(query) {
      // Replace with your code to handle the search query
      console.log('Search query:', query);
      // Clear previous content
      previousPapersSection.innerHTML = '';
      bookLinksSection.innerHTML = '';
  
      // Add your logic to fetch and display the search results based on the query
      // For demonstration, let's display a message indicating the search query
      previousPapersSection.innerHTML = '<p>Search results for: ' + query + '</p>';
    }
  
    function handleContribution(branch, paperLink, bookLink) {
      // Replace with your code to handle the contribution
      console.log('Branch:', branch);
      console.log('Paper Link:', paperLink);
      console.log('Book Link:', bookLink);
      // Add your logic to process the contribution (e.g., saving to a database)
      // Display a success message or perform any other necessary actions
      alert('Contribution received successfully!');
      // Clear the contribution form inputs
      contributeForm.reset();
    }
  
    // Event listener for branch selection
    branchLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var branch = this.innerText;
        populateSemesters(branch);
  
        var semesterSection = document.createElement('div');
        semesterSection.id = 'semester-section';
        semesterSection.innerHTML = '<label for="semester-select">Select Semester:</label>';
        semesterSection.appendChild(semesterSelect);
  
        previousPapersSection.innerHTML = '';
        bookLinksSection.innerHTML = '';
        previousPapersSection.appendChild(semesterSection);
      });
    });
  
    // Event listener for semester selection
    document.addEventListener('change', function(event) {
      if (event.target && event.target.id === 'semester-select') {
        var branch = document.querySelector('.branch-link.selected').innerText;
        var semester = event.target.value;
        loadPreviousYearPapers(branch, semester);
        loadBookLinks(branch, semester);
      }
    });
  
    // Event listener for search form submission
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var query = searchInput.value;
      handleSearchQuery(query);
    });
  
    // Event listener for contribute form submission
    contributeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var branch = document.getElementById('contribute-branch').value;
      var paperLink = document.getElementById('contribute-paper-link').value;
      var bookLink = document.getElementById('contribute-book-link').value;
      handleContribution(branch, paperLink, bookLink);
    });
  });
  