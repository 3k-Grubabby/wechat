import {
  HTTP
} from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(sCollback) {
    this.request({
      url: 'index.php',
      success: (res) => {
        sCollback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }
  getClassic(index, nextOrPrevious, sCollback) {
    //Key
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)

    if (!classic) {
      this.request({
        url: `music.php?index=${index}&ty=${nextOrPrevious}`,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCollback(res)
        }
      })
    } else {
      sCollback(classic)
    }

  }

  
  getMyFavor(success){
    let params={
      url:'classic/favor',
      success:success
    }
    this.request(params)
  }

  
  isFirst(index) { //是否第一个
    return index == 4 ? true : false;
  }
  isLatest(index) { //是否最后一个
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false;
  }
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }
  _getKey(index) {
    let key = 'classic-' + index
    return key
  }


}

export {
  ClassicModel
}