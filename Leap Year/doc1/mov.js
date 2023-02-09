function movTitle(str){
    return str.split(" ").map(n => {return n[0].toUpperCase() + 
    n.slice(1).toLowerCase()}).join(" ")
    }
  
  console.log(movTitle('The Movie'))
  
  const mov = [
    {title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" },
    {title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
    {title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror"},
    {title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
    {title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" }

  ];
  
  
  function Name(arr){
    let output= []
    for(let i=0; i<arr.length; i++){
      output.push(movTitle(arr[i]['title']))
      output.push(movTitle(arr[i]['genre']))
    }
    return output
  }
  console.log(Name(mov))