
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        
        {title: 'Open Source Doesn’t Make Money Because It Isn’t Designed To Make Money', content: 'http://www.ianbicking.org/blog/2019/03/open-source-doesnt-make-money-by-design.html', user_id: '1', board_id: '1', abstract: 'Open source/money',image: '', category: 'business'},
        
        {title: 'Google unveils Stadia cloud gaming service, launches in 2019', content: 'https://www.theverge.com/2019/3/19/18271702/google-stadia-cloud-gaming-service-announcement-gdc-2019', user_id: '1', board_id: '2', abstract: 'Gaming service',image: '', category: 'tech'},

        {title: 'Karen Uhlenbeck, Uniter of Geometry and Analysis, Wins Abel Prize', content: 'https://www.quantamagazine.org/karen-uhlenbeck-uniter-of-geometry-and-analysis-wins-abel-prize-20190319/', user_id: '1', board_id: '3', abstract: 'Abel prize winner',image: '', category: 'tech'}
      ]);
    });
};
