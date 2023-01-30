import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Football Shirts",
      imageUrl:
        "https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    },
    {
      id: 2,
      title: "Football Socks",
      imageUrl:
        "https://img.freepik.com/premium-psd/white-long-socks-mockup-isolated-your-design_34168-2254.jpg?w=2000",
    },
    {
      id: 3,
      title: "Shin Guards",
      imageUrl: "https://cdn.jako.de/userdata/dcshop/images/normal/2764_110.jpg",
    },
    {
      id: 4,
      title: "Football Boots",
      imageUrl:
        "https://images.unsplash.com/photo-1612387049565-d8022fe99fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      title: "Footballs",
      imageUrl:
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
