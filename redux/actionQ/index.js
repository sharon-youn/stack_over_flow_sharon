export const Add_Title = "Add_Title"

// 버튼클릭으로부터 데이터를 받아올 액션 생성

export const addTitle = (inputData) => {
  return {
    type: Add_Title,
    payload:{
        id: inputData.id,
        title: inputData.title
    }
  }
}
// payload안에 우리가 받아올 data와 id를 적는다