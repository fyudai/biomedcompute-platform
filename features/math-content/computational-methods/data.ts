import { informationTheoryData } from "./information-theory/data"
import { fourierAnalysisData } from "./fourier-analysis/data"
import { differentialEquationsData } from "./differential-equations/data"
import { dynamicalSystemsData } from "./dynamical-systems/data"
import { stochasticProcessesData } from "./stochastic-processes/data"
import { graphTheoryData } from "./graph-theory/data"

export const computationalMethodsData = [
    {
        id: "information-theory",
        unit: 1,
        title: "Information Theory",
        href: "/math-class/computational-mathematics/information-theory",
        chapters: informationTheoryData
    },
    {
        id: "fourier-analysis",
        unit: 2,
        title: "Fourier Analysis",
        href: "/math-class/computational-mathematics/fourier-analysis",
        chapters: fourierAnalysisData
    },
    {
        id: "differential-equations",
        unit: 3,
        title: "Differential Equations",
        href: "/math-class/computational-mathematics/differential-equations",
        chapters: differentialEquationsData
    },
    {
        id: "dynamical-systems",
        unit: 4,
        title: "Dynamical Systems",
        href: "/math-class/computational-mathematics/dynamical-systems",
        chapters: dynamicalSystemsData
    },
    {
        id: "stochastic-processes",
        unit: 5,
        title: "Stochastic Processes",
        href: "/math-class/computational-mathematics/stochastic-processes",
        chapters: stochasticProcessesData
    },
    {
        id: "graph-theory",
        unit: 6,
        title: "Graph Theory",
        href: "/math-class/computational-mathematics/graph-theory",
        chapters: graphTheoryData
    },
]