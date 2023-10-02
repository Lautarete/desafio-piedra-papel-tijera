const state = {
  data: {
    timeOver: false,
  },
  listeners: [],
  init() {
    console.log("State Init");

    const localData = localStorage.getItem("game-save-state");
    this.setState(JSON.parse(localData!));
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback(newState);
    }
    console.log("se ah cambiado el state");
    console.log(this.data);
    localStorage.setItem("game-save-state", JSON.stringify(newState));
  },
  setWinner() {
    const lastState = this.getState();
    let result: string;

    const priorities = {
      scissors: { scissors: "tie", rock: "lose", paper: "win" },
      rock: { scissors: "win", rock: "tie", paper: "lose" },
      paper: { scissors: "lose", rock: "win", paper: "tie" },
    };

    result = priorities[lastState.userPlay][lastState.PCPlay];

    if (result === "win") {
      lastState.history.userWins++;
      lastState.currentWinner = "user";
      this.setState(lastState);
    }
    if (result === "tie") {
      // console.log("tie");
      lastState.currentWinner = "tie";
      this.setState(lastState);
    }
    if (result === "lose") {
      lastState.history.PCWins++;
      lastState.currentWinner = "PC";
      this.setState(lastState);
    }
  },
  subscribe(callback: (any) => void) {
    this.listeners.push(callback);
  },
};

export { state };
