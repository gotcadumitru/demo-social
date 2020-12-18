let initialState =[
    {
      navbarItemsArray: [
        {
          itemLink: "/profile",
          itemName: "Profile",
          id: 0,
        },
        {
          itemLink: "/messages",
          itemName: "Messages",
          id: 0,
        },
        {
          itemLink: "/users",
          itemName: "Users",
          id: 0,
        },
        {
          itemLink: "/news",
          itemName: "News",
          id: 0,
        },
        {
          itemLink: "/music",
          itemName: "Music",
          id: 0,
        },
        {
          itemLink: "/settings",
          itemName: "Settings",
          id: 0,
        },
      ]
    },
    {
      friendsArray: [
        {
          img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk",
          name: "Andrew",
          id: 1,
        },
        {
          img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk",
          name: "Lerks",
          id: 2,
        },
        {
          img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk",
          name: "Dima",
          id: 3,
        },
        {
          img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk",
          name: "Laptop",
          id: 4,
        },
        {
          img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk",
          name: "Test",
          id: 5,
        },
      ],
    }
  ]     

const navbarReducer = (state= initialState,action) =>{
    
    return state;
}
export default navbarReducer;