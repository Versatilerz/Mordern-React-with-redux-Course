import Dropdown from "./components/Dropdown";

const App = () => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];

  return <Dropdown options={options} />;
};

export default App;
