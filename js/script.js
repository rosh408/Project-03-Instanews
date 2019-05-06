$(function(){

  $('.section-list').on('change', function(){

    const category = $(this).val();

    $.ajax({
      method: 'get',
      url: 'https://api.nytimes.com/svc/topstories/v2/'+ category + '.json?api-key=n8C2eF8jDItIXtbM7nYFtYbPiZax89hp'
    })

    .done(function(data){ // Start of done function()
      // console.log(data.results);

      // filter() and slice()
      const filterData = data.results.filter(function(article){
        return article.multimedia[4] !== undefined;
      });
      const articleLink = filterData.slice(3);
      $.each(articleLink, function(index, article) {

        const articleUrl = article.url;
        const articleImage = article.multimedia[4].url;
        const newsTemplate = `<a href="${articleUrl}"><img src="${articleImage}"><div><p>${article.abstract}</p></div></a>`;
        $('.main-section a').addClass('news-item-container');
        $('.main-section img').addClass('article-image');
        $('.main-section div').addClass('text-block');
        $('.main-section p').addClass('text-block-p');
        $('.main-section').append(newsTemplate);
      });// End of each

    }) // End of done function()
    .fail(function(){

    }) // End of fail function()
    .always(function(){

    }) // End of always function()
  }); // End of click function ()

}); // End of jQuery doc ready

 
