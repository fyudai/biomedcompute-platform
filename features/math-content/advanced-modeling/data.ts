import { bayesianInferenceData } from "./bayesian-inference/data"
import { variationalMethodsData } from "./variational-methods/data"
import { informationGeometoryData } from "./information-geometory/data"
import { manifoldLearningData } from "./manifold-learning/data"
import { controlTheoryData } from "./control-theory/data"

export const advancedModelingData = [
    {
        id: "bayesian-inference",
        unit: 1,
        title: "Bayesian Inference",
        href: "/math-class/advanced-modeling/bayesian-inference",
        chapters: bayesianInferenceData
    },
    {
        id: "valiational-method",
        unit: 2,
        title: "Valiational Method",
        href: "/math-class/advanced-modeling/valiational-method",
        chapters: variationalMethodsData
    },
    {
        id: "information-geometory",
        unit: 3,
        title: "Information Geometory",
        href: "/math-class/advanced-modeling/information-geometory",
        chapters: informationGeometoryData
    },
    {
        id: "manifold-learning",
        unit: 4,
        title: "Manifold Learning",
        href: "/math-class/advanced-modeling/manifold-learning",
        chapters: manifoldLearningData
    },
    {
        id: "control-theory",
        unit: 5,
        title: "Control Theory",
        href: "/math-class/advanced-modeling/control-theory",
        chapters: controlTheoryData
    },
]