$(function(){

  $('.section-list').on('change', function(){

    const category = $(this).val();

    $.ajax({
      method: 'get',
      url: 'https://api.nytimes.com/svc/topstories/v2/'+ category + '.json?api-key=n8C2eF8jDItIXtbM7nYFtYbPiZax89hp'
    })

    .done(function(data){ // Start of done function()
      // console.log(data);

      // try filterting data and slicing data 
      const filterData = data.filter(function(index){
        return index.
      });


      $.each(data.results, function(index, article) {
        // console.log(article);

        const articleImage = article.multimedia[4].url;
        console.log(articleImage);

        $('.main-section').append(` <div>${article.abstract}</div> `);
        $('.main-section div').addClass('news-abstract');

        $('.news-abstract').append( `<a href="${articleImage}" style='background-image: rgba(0,0,0,0.3), url("${articleImage}")';></a>` );
        
      });// End of each

    }) // End of done function()

  }); // End of click function ()
  
}); // End of jQuery doc ready

 
