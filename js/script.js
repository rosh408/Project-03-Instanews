$.ajax({
    method: 'get',
    url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=n8C2eF8jDItIXtbM7nYFtYbPiZax89hp'
  })
    .done(function(data){
    console.log(data);
  })