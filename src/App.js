import "./App.css";
import MyComponent from "./profile/componant";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <MyComponent
        style={{ borderStyle: "solid" }}
        fullName="yassine chaouaa"
        bio="born in Medenine 27/11/1998"
        profession="studing in gomycode"
      >
        <img
          src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/99131847_131952868467468_8761234818525560832_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-wdrhGgm5XEAX80lJRs&_nc_ht=scontent.ftun10-1.fna&oh=dcc30885aa56bc7ce33dc39da6b24da1&oe=6176DA3A"
          style={{
            width: "800px",
            height: "600px",
            marginLeft: "100px",
            marginTop: "40px",
          }}
        />
      </MyComponent>
    </div>
  );
}

export default App;
