import { HTTP } from "../util/http-p"

class KeywordModel extends HTTP  {
    maxLength = 10
    getHistory(){
        const  words =  wx.getStorageSync('q')
        if(!words){
            return []
        }
        return words
    }
    getHot(){
        return this.request({
            url:"hot.php"
        })
    }
    addToHistory(keyword){
        let words = this.getHistory()
        const has =  words.includes(keyword)

        if(!has){
            //数组末尾删除
            const length = words.length
            if(length>=this.maxLength){
                words.pop()
            }
           words.unshift(keyword) 
           wx.setStorageSync('q', words)
        }

    }
}

export {KeywordModel}