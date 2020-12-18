import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  postsArray: [
    {
      id: 1,
      likeCounter: 10,
      message: "Fugiat sunt veniam tempor exercitation.",
      name: "Gotca Dumitru"
    },
    {
      id: 2,
      likeCounter: 15,
      message: "Fugiat Laborum ipsum aliqua ut occaecat sint aute duis aliquip pariatur id eu magna. tempor exercitation.",
      name: "Pavalache valeria"
    },
    {
      id: 3,
      likeCounter: 20,
      message: "Ullamco nisi mollit eu incididunt sit officia esse esse laborum do ullamco.",
      name: "User Name"
    },
  ]
}

// it('new post shoul be added',()=>{
//   let action = addPost('Test action');

//   let newState = profileReducer(state,action)
//   expect(newState.postsArray.length).toBe(4);
// })
it('new post shoul be deleted',()=>{
  let action = deletePost(1);
  
  let newState = profileReducer(state,action)
  expect(newState.postsArray.length).toBe(2);
})