export const categoriesData = [
    {
        id: 'energy', // This ID matches the URL slug
        title: 'Energy',
        color: 'bg-blue-100 text-blue-900',
        bannerImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image9.jpeg`,
        description: "Sustainable and traditional energy solutions powering the future.",
        subCategories: [
            {
                title: 'Biomass Energy',
                image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image1.jpeg`,
                description: 'The Biomass Energy Category Encompasses Systems And Solutions That Generate Power From Organic Materials Such As Wood...'
            },
            // ... add all other subcategories here
        ]
    },
    {
        id: 'power-generation', // This ID matches the URL slug
        title: 'Power Generation',
        color: 'bg-orange-100 text-orange-900',
        bannerImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image10.jpeg`,
        description: "Heavy-duty machinery and electrical systems for industrial power generation.",
        subCategories: [
            // ... add all subcategories here
        ]
    }
];

// Helper function to find a category by slug
export function getCategoryBySlug(slug: string) {
    return categoriesData.find((cat) => cat.id === slug);
}