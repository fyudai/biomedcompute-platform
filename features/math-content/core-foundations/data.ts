import { linearAlgebraData } from "./linear-algebra/data"
import { probabilityTheoryData } from "./probability-theory/data"
import { statisticsData } from "./statistics/data"
import { calculusData } from "./calculus/data"
import { optimizationData } from "./optimization/data"
import { numericalMethodData } from "./numerical-methods/data"

export const coreFoundationData = [
    {
        id: "linear-algebra",
        unit: 1,
        title: "Linear Algebra",
        href: "/math-class/core-foundations/linear-algebra",
        chapters: linearAlgebraData,
    },
    {
        id: "probability-theory",
        unit: 2,
        title: "Probability Theory",
        href: "/math-class/core-foundations/probability-theory",
        chapters: probabilityTheoryData
    },
    {
        id: "statistics",
        unit: 3,
        title: "Statistics",
        href: "/math-class/core-foundations/statistics",
        chapters: statisticsData
    },
    {
        id: "calculus",
        unit: 4,
        title: "Calculus",
        href: "/math-class/core-foundations/calculus",
        chapters: calculusData
    },
    {
        id: "optimization",
        unit: 5,
        title: "Optimization",
        href: "/math-class/core-foundations/optimization",
        chapters: optimizationData
    },
    {
        id: "numerical-method",
        unit: 6,
        title: "Numerical Method",
        href: "/math-class/core-foundations/numerical-method",
        chapters: numericalMethodData
    },
]