/*
  const moviesRef = firebase.firestore().collection("movies")
  const getData =() => {
    //let getMovies = async() => await moviesRef.orderBy('created_at', 'desc').get()
    moviesRef.orderBy('created_at', 'desc')
      .onSnapshot((querySnapshot) => {
          const items = []
        querySnapshot.forEach((doc) => {
          const element = doc.data();
          items.push(element)          
        })
        
        setTitle(items)
        setLoader(false)
        console.log('out_items:',...items)
      }
    )
  }
  */