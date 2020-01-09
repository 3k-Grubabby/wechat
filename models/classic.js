import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP{
    getLatest(sCollback){
        this.request({
            url:'index.php',
            success:(res)=>{
              sCollback(res)
            }
          })
    }
}

export {ClassicModel}