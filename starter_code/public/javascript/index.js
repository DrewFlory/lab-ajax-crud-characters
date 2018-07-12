const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  // Fetch All the Characters
  $('#fetch-all').click(function(){

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
  
        $('characters-container').empty();
  
        response.data.forEach((oneCharacter)=>{
            const newChar = 
            `
            <div>
            <h5 class="name">Name: ${oneCharacter.name}</h5>
            <p class="occupation">Occupation: ${oneCharacter.occupation}</p>
            <p class="weapon">Weapon: ${oneCharacter.weapon}</p>
            </div>
            <hr>
            `
            $('#characters-div').append(newChar);
        })
    })
  });

//Fetch just one character
$('#fetch-one').click(function(){

    const theID = $('#character-id').val();
    console.log(theID);

    axios.get('https://ih-crud-api.herokuapp.com/characters/' + theID)

    .then((responseFromApi)=>{
      const newChar =
    `
    <div>
    <h3>Name: ${responseFromApi.data.name}</h3> 
    <p>Occupation: ${responseFromApi.data.occupation}</p> 
    <p>Weapon: ${responseFromApi.data.weapon}</p>
    </div>
    `
    $('#characters-div').append(newChar);

})
    .catch((err)=>{
    console.log(err);
});

})

//Delete one character
$('#delete-one').click(function(){

  const deleteThisID = $('#character-id-delete').val();
  console.log(deleteThisID);

  axios.get('https://ih-crud-api.herokuapp.com/characters/' + deleteThisID)

  .then((responseFromApi)=>{
    console.log(responseFromApi.data)



    $('#characters-div').remove(responseFromApi.data);
})
  .catch((err)=>{
  console.log(err);
});

})


  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})

