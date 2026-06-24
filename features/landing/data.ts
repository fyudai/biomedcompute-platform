import { CTA_ROUTES } from "@/features/navigation/route";

// Navigation Links in the header
export const navigationLinks = [
    {
        label: "Laboratories",
        href: "#",
    },
    {
        label: "About",
        href: "#",
    },
    {
        label: "Documentation",
        href: "#",
    },
    {
        label: "GitHub",
        href: "#",
    },
];

// Navigation Links in the footer
export const footerLinks = [
    {
        label: "Laboratories",
        href: "#",
    },
    {
        label: "About",
        href: "#",
    },
    {
        label: "Documentation",
        href: "#",
    },
    {
        label: "GitHub",
        href: "#",
    },
]

// CTA Buttons
export const CTAButtons = [
    {
        id: "cta-math",
        title: "Math Foundation Class",
        description: "Lean the mathematical knowledge for modern scientific computing.",
        href: CTA_ROUTES.mathClass
    },
    {
        id: "cta-code",
        title: "Computational Methods & Implementation Lab",
        description: "Transforme mathematical theory into practical computational tools",
        href: CTA_ROUTES.codingLabs
    },
    {
        id: "cta-research",
        title: "Research Applications & Case Studies",
        description: "Connect computational knowledge to real-world biomedical research.",
        href: CTA_ROUTES.researchApplications
    },
    {
        id: "cta-journal",
        title: "Frontier Research Journal Club",
        description: "A collaborative community for cutting-edge scientific developments.",
        href: CTA_ROUTES.journalClub
    }
]

// Learning Philosophy data
export const philosophy = [
    {
        title: "LEARN",
        description:
            "Build mathematical intuition and theoretical understanding.",
    },

    {
        title: "IMPLEMENT",
        description:
            "Develop computational methods from first principles through coding.",
    },

    {
        title: "DISCOVER",
        description:
            "Apply computational methods to modern biomedical research and emerging scientific problems.",
    },
];

// Math Foundation
export const mathFoundations = [
    {
        id: "timeseries",
        title: "Time-Series Analysis",
        description:
            "Signal processing, FFT, filtering, spectral analysis, and stochastic processes.",
        topics: ["FFT", "Filtering", "Spectral Analysis"],
    },

    {
        id: "image-analysis",
        title: "Image Analysis",
        description:
            "Segmentation, convolution, feature extraction, microscopy, and computer vision.",
        topics: ["Segmentation", "Convolution", "Morphology"],
    },
]

// Core framework data
export const frameworks = [
    {
        id: "math",
        title: "math",
        titles: ["Mathematical", "Foundation Class"],

        description:
            "Build the mathematical intuition necessary for modern computational biomedical science.",

        reverse: false,

        items: [
            "Linear Algebra",
            "Probability Theory",
            "Statistics",
            "Optimization",
            "Differential Equations",
        ],
    },

    {
        id: "implementation",

        title: "implementation",
        titles: ["Computational Methods", "and", "Implementation Lab"],

        description:
            "Transform mathematical concepts into executable algorithms through hands-on coding.",

        reverse: true,

        items: [
            "Signal Processing",
            "Machine Learning",
            "Image Computing",
            "Bioinformatics",
            "Statistical Modeling",
        ],
    },

    {
        id: "research",

        title: "research",
        titles: ["Research Applications", "and", "Case Studies"],


        description:
            "Apply computational methods to real biomedical research problems and reproduce published scientific work.",

        reverse: false,

        items: [
            "EEG Analysis",
            "Histopathology",
            "Medical Imaging",
            "Single Cell RNA-seq",
            "Computational Pathology",
        ],
    },

    {
        id: "journal",

        title: "journal",
        titles: ["Frontier Research", "Journal Club"],

        description:
            "A living community for exploring newly emerging computational methods shaping biomedical science.",

        reverse: true,

        items: [
            "Paper Discussions",
            "Method Reviews",
            "Research Presentations",
            "Emerging AI Methods",
            "Community Collaboration",
        ],
    },
];



export const laboratories = [
    {
        id: "timeseries",
        title: "Time-Series Analysis",
        description:
            "Signal processing, FFT, filtering, spectral analysis, and stochastic processes.",
        topics: ["FFT", "Filtering", "Spectral Analysis"],
    },

    {
        id: "image-analysis",
        title: "Image Analysis",
        description:
            "Segmentation, convolution, feature extraction, microscopy, and computer vision.",
        topics: ["Segmentation", "Convolution", "Morphology"],
    },

    {
        id: "machine-learning",
        title: "Machine Learning",
        description:
            "Classification, clustering, deep learning, and representation learning methods.",
    },

    {
        id: "statistics",
        title: "Statistical Modeling",
        description:
            "Regression, probability models, Bayesian inference, and uncertainty estimation.",
    },

    {
        id: "dynamical-systems",
        title: "Dynamical Systems",
        description:
            "Differential equations, phase space analysis, simulation, and neural dynamics.",
    },

    {
        id: "bioinformatics",
        title: "Bioinformatics",
        description:
            "Sequence analysis, genomics, gene expression modeling, and biological networks.",
    },
];