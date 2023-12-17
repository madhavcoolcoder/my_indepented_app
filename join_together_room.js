var firebaseConfig = {
      apiKey: "AIzaSyC1L4ERIjC38Hj021HOe24kKIe7B8ridWs",
      authDomain: "kwitter-e7991.firebaseapp.com",
      databaseURL: "https://kwitter-e7991-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7991",
      storageBucket: "kwitter-e7991.appspot.com",
      messagingSenderId: "85194135322",
      appId: "1:85194135322:web:7cd0440633769e68637ea3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "join_together_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectTo RoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "join_together.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}
