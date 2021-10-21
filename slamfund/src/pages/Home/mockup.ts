import lakers from "../../assets/gsw.png";
import warriors from "../../assets/lal.png";
import bulls from "../../assets/bulls.png";
import celtics from "../../assets/celtics.png";
import hornets from "../../assets/hornets.png";
import raptors from "../../assets/raptors.png";

export const mockUpList = [
  {
    teamA: {
      name: "Lakers",
      logo: "test",
      score: 110,
      image: lakers,
    },
    teamB: {
      name: "Warriors",
      logo: "test",
      score: 110,
      image: warriors,
    },
    bet: {
      type: "spread",
    },
  },

  {
    teamA: {
      name: "Bulls",
      logo: "test",
      score: 110,
      image: bulls,
    },
    teamB: {
      name: "Hornets",
      logo: "test",
      score: 110,
      image: hornets,
    },
    bet: {
      type: "spread",
    },
  },

  {
    teamA: {
      name: "Raptors",
      logo: "test",
      score: 120,
      image: raptors,
    },
    teamB: {
      name: "Warriors",
      logo: "test",
      score: 95,
      image: warriors,
    },
    bet: {
      type: "spread",
    },
  },
  {
    teamA: {
      name: "Warriors",
      logo: "test",
      score: 88,
      image: warriors,
    },
    teamB: {
      name: "Hornets",
      logo: "test",
      score: 80,
      image: hornets,
    },
    bet: {
      type: "spread",
    },
  },
];
