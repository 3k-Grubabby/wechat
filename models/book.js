import {
    HTTP
  } from '../util/http-p.js'

  class BookModel extends HTTP{
      getHotList(){
         return  this.request({
            url:'book_hot_list.php'
          })
      }

      getMyBookCount(){
        return this.request({
           url:'book_hot_list.php?ty=count'
        })
      }
      getDetail(bid){
        return  this.request({
          url:'book_hot_list.php?ty=detail&bid='+bid
        })
      }
    
      getLikeStatus(bid){
        return  this.request({
          url:'book_hot_list.php?ty=favor&bid='+bid
        })

      }
      getComments(bid){
        return  this.request({
          url:'book_hot_list.php?ty=comments&bid='+bid
        })
      }
  }
  

  export {BookModel}