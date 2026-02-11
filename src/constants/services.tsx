// src/constants/services.tsx

export interface ServiceNode {
  title: string;
  slug?: string; // optional
  children?: ServiceNode[];
}

export interface ServiceCategory {
  category: string;
  slug?: string; // optional also if needed
  services: ServiceNode[];
}

export const servicesData: ServiceCategory[] = [
  {
    category: "Business Setup in UAE",
    slug: "business-setup-uae",
    services: [
      {
        title: "Mainland Company",
        children: [
          {
            title: "LLC Company Formation in Dubai",
            slug: "llc-company-formation",
          },
          {
            title: "Mainland Company Formation in Dubai",
            slug: "mainland-company-formation",
          },
        ],
      },
      {
        title: "Free Zone Company Formation",

        children: [
          {
            title: "Meydan Free Zone",
            slug: "meydan-free-zone",
          },
          {
            title: "IFZA Free Zone – Dubai Silicon Oasis",
            slug: "ifza-free-zone",
          },
          {
            title: "Ajman Free Zone",
            slug: "ajman-free-zone",
          },
          {
            title: "Ajman Media City Free Zone",
            slug: "ajman-media-city-free-zone",
          },
          {
            title: "Hamriyah Free Zone",
            slug: "professional-license",
          },
          {
            title: "JAFZA Free Zone",
            slug: "professional-license",
          },
          {
            title: "RAKEZ Free Zone",
            slug: "professional-license",
          },
          {
            title: "Sharjah Media City Free Zone",
            slug: "professional-license",
          },
          {
            title: "Umm Al Quwain Free Trade Zone",
            slug: "professional-license",
          },
        ],
      },
      {
        title: "Offshore Company in UAE",
        slug: "offshore-company-uae",
      },
    ],
  },
  {
    category: "Product Registration",
    slug: "product-registration",
    services: [
      {
        title: "Cosmetic Product Registration",
        slug: "cosmetic-product-registration",
      },
      {
        title: "Detergent and Disinfectant Product Registration",
        slug: "detergent-disinfectant-product-registration",
      },
      { title: "Food Item Registration", slug: "food-item-registration" },
      {
        title: "Health Supplement Products Registration",
        slug: "health-supplement-products-registration",
      },
      {
        title: "Pet Animal Food Registration",
        slug: "pet-animal-food-registration",
      },
    ],
  },
  {
    category: "Business Support",
    slug: "business-support",
    services: [
      {
        title: "Trademark Registration UAE",
        slug: "trademark-registration-uae",
      },
      {
        title: "Document Attestation Services",
        slug: "document-attestation-services",
      },
      {
        title: "Document Translation Services",
        slug: "document-translation-services",
      },
      { title: "Tax Residency Certificate", slug: "tax-residency-certificate" },
      {
        title: "Company Liquidation Services",
        slug: "company-liquidation-services",
      },
      {
        title: "PRO Services in Dubai",

        children: [
          {
            title: "Family Visa Services in Dubai",
            slug: "llc-company-formation",
          },
          {
            title: "Employment Visa Services",
            slug: "professional-license",
          },
        ],
      },
      { title: "Find a Distributor in UAE", slug: "find-distributor-uae" },
      { title: "IOR & Fulfillment Services", slug: "ior-fulfillment-services" },
      { title: "Authorized Representative", slug: "authorized-representative" },
    ],
  },
];
