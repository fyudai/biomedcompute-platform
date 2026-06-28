import { coreFoundationData } from "./core-foundations/data"
import { computationalMethodsData } from "./computational-methods/data"
import { advancedModelingData } from "./advanced-modeling/data"

export const mathClassData = [
    {
        id: "core-foundations",
        title: "Core Foundations",
        description: "Fundamental mathematics required to understand scientific computing and quantitative modeling.",
        href: "/math-class/core-foundations",
        units: coreFoundationData,
    },

    {
        id: "computational-mathematics",
        title: "Computational Mathematics",
        description: "Mathematical frameworks directly used in computational algorithms and signal analysis.",
        href: "/math-class/computational-mathematics",
        units: computationalMethodsData,
    },

    {
        id: "advanced-modeling",
        title: "Advanced Modeling",
        description: "Modern mathematical frameworks powering cutting-edge biomedical computational research.",
        href: "/math-class/advanced-modeling",
        units: advancedModelingData
    }
]