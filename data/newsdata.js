
// news=[
//     {
//         "title" :   "news1",
//         "desc"  :   "this is the content for first news",
//         "slug"  :   "news1"
//     },
//     {
//         "title" :   "news2",
//         "desc"  :   "this is the content for second news",
//         "slug"  :   "news2"
//     },
//     {
//         "title" :   "news3",
//         "desc"  :   "this is the content for third news",
//         "slug"  :   "news3"
//     },
//     {
//         "title" :   "news4",
//         "desc"  :   "this is the content for forth news",
//         "slug"  :   "news1"
//     },
// ]
var data=[];
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('46c1d49955ea492591cb268722003dd0');
const a=newsapi.v2.topHeadlines({
  country: 'us'
})
console.log(a)
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
  // country: 'us'
// }).then(response => {
    // if (response.status == 'ok') {
      // module.exports.data=response.status
      // console.log('status ok')
    // }
// });
// module.exports=news