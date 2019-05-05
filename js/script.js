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
      $.each(filterData, function(index, article) {

        const articleUrl = article.url;
        const articleImage = article.multimedia[4].url;
        // console.log(articleImage);

        $('.main-section').append(`
        <a href="${articleUrl}>
        <img src="${articleImage}">
        <div class="text-block">
        <p>${article.abstract}</p>
        </div>
        </a>
        `);
        $('.main-section').css({
          "display": "flex",
          "flex-direction": "row",
          "flex-wrap": "wrap",
          "max-width": "100%"
        });
        $('.main-section a').css({
          // "background-image": " -webkit-gradient(linear, rgba(0,0,0,0.22), rgba(0,0,0,0.22)), url( ' + articleImage + ' )",
          "height": "22rem",
          "width": "50%",
          "position": "relative",
          "display": "flex",
          "justify-content": "flex-end",
          "align-items": "flex-end"
        });
        $('.main-section img').css({
          "width": "10px",
          "height": "12px"
        });
        // console.log($('.main-section img'))
        $('a').find('div').css({
          "position": "absolute"
        });
        $('p').css({
        });
      });// End of each

    }) // End of done function()

  }); // End of click function ()

}); // End of jQuery doc ready

 
