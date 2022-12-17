const PAGE_SIZE = 5;
const FORWARD_LIMIT = PAGE_SIZE - 1;

// calculates how many pages to show back and forward
const ADD_PAGES = Math.floor(PAGE_SIZE / 2);

  const paginator = (currentPage, totalResults) => {
  currentPage = Number(currentPage);
  totalResults = Number(totalResults);

  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  if (totalPages <= PAGE_SIZE) {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  if (currentPage < PAGE_SIZE - 1) {
    let pages = [];

    for (let i = 1; i <= PAGE_SIZE; i++) {
      pages.push(i);
    }

    return pages;
  }

  // calcs the start pages
  // sets a limit in order to stop moving forward before it reaches the end of the array to make sure there is always "X" pages back and forward
  let startPage = Math.min(currentPage - ADD_PAGES, totalPages - FORWARD_LIMIT);

  // sets a limit when adding "forward pages" in order not to exceed the maximum pages limit that can be generated
  let pagesToGenerate = Math.min(currentPage + ADD_PAGES, totalPages);

  let pages = [];

  for (let i = startPage; i <= pagesToGenerate; i++) {
    pages.push(i);
  }

  return pages;
};
