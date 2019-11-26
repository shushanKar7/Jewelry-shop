let initialState = {
  openSignIn: false,
  goToSection: ""
};

function toSection(name_of_section = "HOME") {
    
  // if (name_of_section === "RING") return;  <RING />;
  // if (name_of_section === "EARINGS") return;  <EARINGS />;
  // tenc ifer greq to zer uzac component@ return ani
}

// bayc es funkcian stex cheq grelu ayl orinak App.js um
// ete karaca ogtakar linem urax em ete che sorry =D

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, openSignIn: true };
    case "OPEN_HOME_SECTION":
      return { ...state, goToSection: "HOME" };
    case "OPEN_NECKLACES_SECTION":
      return { ...state, goToSection: "NECKLACES" };
    case "OPEN_RINGS_SECTION":
      return { ...state, goToSection: "RINGS" };
    case "OPEN_EARRINGS_SECTION":
      return { ...state, goToSection: "EARRINGS" };
    case "OPEN_BRACELETS_SECTION":
      return { ...state, goToSection: "BRACELETS" };
    default:
      return state;
  }
};

export default reducer;
