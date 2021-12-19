import User from "./User";

function App() {
  return (
    <>
      <User
        name="Ilkay"
        surname="Polat"
        age={34}
        isLoggedIn={true}
        address={{
          title: "Pendik/Istanbul",
          postCode: 34515,
        }}
      />
    </>
  );
}

export default App;
