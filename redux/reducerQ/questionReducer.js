import dummysample from "../../static/dummysample";
import { Add_Title } from "../actionQ";

const initialState = {
    lastId: 0,
    data: [
        {
            id: '',
            title: '',
            content: ''
        }
    ]
}

// 액션과 이전상태를 받을 reducer 생성
export const questionReducer = (state = initialState, action) => {
    switch(action.type) {
        case Add_Title:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                })
               
            } 
        default: return state
    }
 
}


