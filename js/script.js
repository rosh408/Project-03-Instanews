$(function () {

  $('select').selectric();

  $('.section-list').on('change', function () {
    const category = $(this).val();
    const $loadGif = $('.loading-gif');
    const $mainLink = $('.main-section');
    $('header').addClass('active-header');
    $('footer').addClass('active-footer');
    $loadGif.show();
    $('select').selectric();
    $.ajax({
      method: 'get',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json?api-key=n8C2eF8jDItIXtbM7nYFtYbPiZax89hp'
    })
      .done(function (data) { // Start of done function()
        const filterData = data.results.filter(function (article) {
          return article.multimedia[4] !== undefined;
        });
        const articleLink = filterData.slice(0, 12);
        $mainLink.html('');
        $.each(articleLink, function (index, article) {
          const articleUrl = article.url;
          const articleImage = article.multimedia[4].url;
          const newsTemplate = `<a href="${articleUrl}" class="news-item-container">
        <img class="article-image" src="${articleImage}">
        <div class="text-block">
        <p class="text-block-p">${article.abstract}</p>
        </div>
        </a>`;
          $mainLink.append(newsTemplate);
        });// End of each
      }) // End of done function()
      .fail(function () {
        const failMssgTemplate = `<p class="fail-message">Sorry! There was a problem, please try again</p>`;
        $mainLink.append(failMssgTemplate);
      }) // End of fail function()
      .always(function () {
        $loadGif.hide();
      }) // End of always function()
  }); // End of click function ()

}); // End of jQuery doc ready