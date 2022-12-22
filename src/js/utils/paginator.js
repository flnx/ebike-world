const PAGINATOR_SIZE = 5;
const FORWARD_LIMIT = PAGINATOR_SIZE - 1;

// calculates how many pages to show back and forward
const ADD_PAGES = Math.floor(PAGINATOR_SIZE / 2);

export const paginator = (currentPage, totalResults, pageSize) => {
  const PAGE_SIZE = pageSize;

  currentPage = Number(currentPage);
  totalResults = Number(totalResults);

  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  // returns array with all the pages that can be generated if they are less than paginator size;

  if (totalPages <= PAGINATOR_SIZE) {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  // returns the default paginator size if the current page is at the beginning of the array
  if (currentPage < PAGINATOR_SIZE - 1) {
    let pages = [];

    for (let i = 1; i <= PAGINATOR_SIZE; i++) {
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
