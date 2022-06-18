const Footer = ({ jumpPage, currentPage, maxPage }) => {
  const renderNumberPage = () => {
    let pages = [];
    for (let page = 1; page <= maxPage; page++) {
      pages.push(
        <div
          key={page}
          className={`${
            currentPage === page ? 'containerFooter__page--active' : ''
          }`}
          onClick={() => jumpPage(page)}
        >
          {page}
        </div>
      );
    }
    return pages;
  };
  return (
    <div className="containerFooter">
      <div
        onClick={currentPage > 1 ? () => jumpPage(currentPage - 1) : () => {}}
      >
        {'<'}
      </div>
      {renderNumberPage()}
      <div
        onClick={
          currentPage < maxPage ? () => jumpPage(currentPage + 1) : () => {}
        }
      >
        {'>'}
      </div>
    </div>
  );
};

export default Footer;
