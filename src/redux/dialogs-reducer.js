let initialState = {
  usersArray: [
    {
      name: "Andrew",
      image: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
      id: 1,
      messages: [
        {
          content: "Hello Andrew",
          date: "12.02.2020",
          send: 0,
          id: 1,

        },
        {
          content: "Hello World Andrew",
          date: "13.02.2020",
          send: 1,
          id: 2,
        },
        {
          content: "BbbLorem impdawdwa Andrew",
          date: "14.02.2020",
          send: 0,
          id: 3,
        },
        {
          content: "BbbLorem Andrew",
          date: "14.02.2020",
          send: 0,
          id: 3,
        },

      ],
    },
    {
      name: "Lerka",
      image: "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w",
      id: 2,
      messages: [
        {
          content: "Hello Lerka",
          date: "12.02.2020",
          send: 0,
          id: 4,
        },
        {
          content: "Hello World Lerka",
          date: "13.02.2020",
          send: 1,
          id: 5,
        },
        {
          content: "BbbLorem Lerka",
          date: "14.02.2020",
          send: 1,

          id: 6,
        },

      ],
    },
    {
      name: "Dima",
      image: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      id: 3,
      messages: [
        {
          content: "Hello Dima",
          date: "12.02.2020",
          send: 1,

          id: 7,
        },
        {
          content: "Hello World Dima",
          date: "13.02.2020",
          send: 0,
          id: 8,
        },
        {
          content: "BbbLorem impdawdwa Dima",
          date: "14.02.2020",
          send: 0,
          id: 9,
        },

      ],
    },
  ],
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = {
        content: action.mess,
        date: "12.02.2020",
        send: 1,
        id: 1,
      };
      return {
        ...state,
        usersArray: [...state.usersArray],
        usersArray: [
        {
          ...state.usersArray[0],
          messages: [...state.usersArray[0].messages, newMessage],
        },
        {
          ...state.usersArray[1],
          messages: [...state.usersArray[1].messages, newMessage],
        },
        {
          ...state.usersArray[2],
          messages: [...state.usersArray[2].messages, newMessage],
        },
      ],
        messageText: '',
      }
    default:
      return state;
  }
}

export const addMessage = (messageText) => ({
  type: 'ADD-MESSAGE',
  mess: messageText,
});


export default dialogsReducer;