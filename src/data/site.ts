export interface Branch {
  slug: string;
  name: string;
  address: string;
  phone: string;
  landline: string;
  email: string;
  hours: string;
  fax: string;
  mapEmbedSrc: string;
  gallery: GalleryImage[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ComplaintsInfo {
  phone: string;
  email: string;
  address: string;
  web: string;
}

export interface LanguageAccess {
  blurb: string;
}

export interface Privacy {
  contactEmail: string;
}

export interface SiteData {
  brand: {
    name: string;
    tagline: string;
  };
  branches: Branch[];
  complaints: ComplaintsInfo;
  languageAccess: LanguageAccess;
  privacy: Privacy;
}

export const siteData: SiteData = {
  brand: {
    name: "Dani Care Inc",
    tagline: "Compassionate Care for Adults with Intellectual and Developmental Disabilities"
  },
  branches: [
    {
      slug: "gresham-224th",
      name: "Dani Care — Gresham (SE 224th Ave)",
      address: "1037 SE 224th Ave, Gresham OR 97030, United States",
      phone: "(503) 419-8606",
      landline: "+1 (503) 328-8068",
      email: "Danicareinc@outlook.com",
      hours: "Mon–Fri 8am–6pm; 24/7 on-call",
      fax: "(971) 386-1353",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6504900123456!2d-122.4304!3d45.5000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzAwLjAiTiAxMjLCsDI1JzQ5LjQiVw!5e0!3m2!1sen!2sus!4v1234567890",
      gallery: [
        {
          src: "/images/224th/1.png",
          alt: "Welcoming exterior of our Dani Care home, surrounded by greenery and a peaceful neighborhood."
        },
        {
          src: "/images/224th/2.png",
          alt: "Comfortable living area with cozy seating, natural light, and a calm atmosphere for relaxation."
        },
        {
          src: "/images/224th/3.png",
          alt: "Organized office area designed for staff coordination and family communication."
        },
        {
          src: "/images/224th/4.png",
          alt: "Modern, fully equipped kitchen with updated appliances for nutritious meal preparation."
        },
        {
          src: "/images/224th/5.png",
          alt: "Bright, accessible hallway leading to private resident rooms."
        },
        {
          src: "/images/224th/6.png",
          alt: "Engaging activity space for puzzles, games, and social interaction."
        },
        {
          src: "/images/224th/7.png",
          alt: "Spacious multipurpose room for recreation, exercise, and group activities."
        },
        {
          src: "/images/224th/8.png",
          alt: "Clean and accessible bathroom with walk-in shower and safety features."
        },
        {
          src: "/images/224th/9.png",
          alt: "On-site laundry with emergency wash station to ensure hygiene and safety."
        },
        {
          src: "/images/224th/10.png",
          alt: "Peaceful outdoor garden and deck area for relaxation, fresh air, and activities."
        },
        {
          src: "/images/224th/11.png",
          alt: "Inviting outdoor deck with seating and potted plants, overlooking a peaceful garden space for relaxation."
        },
        {
          src: "/images/224th/12.png",
          alt: "Expansive backyard with open lawn and greenery, offering a safe and tranquil environment for outdoor activities."
        }
      ]
    },
    {
      slug: "gresham-willowbrook",
      name: "Dani Care — Gresham (SW Willowbrook Pl)",
      address: "1731 SW Willowbrook Pl, Gresham OR 97080, United States",
      phone: "(503) 419-8606",
      landline: "(503) 912-1101",
      email: "Danicareinc@outlook.com",
      hours: "Mon–Fri 8am–6pm; 24/7 on-call",
      fax: "(971) 386-1353",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6504900123456!2d-122.4304!3d45.5000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzAwLjAiTiAxMjLCsDI1JzQ5LjQiVw!5e0!3m2!1sen!2sus!4v1234567890",
      gallery: [
        {
          src: "/images/willowbrook/1.png",
          alt: "Front View — Bright exterior of our Dani Care home, with a welcoming entrance and a peaceful setting."
        },
        {
          src: "/images/willowbrook/2.png",
          alt: "Living Room — Modern living room with stylish seating and natural light for comfort and relaxation."
        },
        {
          src: "/images/willowbrook/3.png",
          alt: "Dining & Living Area — Open dining space connected to the living room, fostering community and togetherness."
        },
        {
          src: "/images/willowbrook/4.png",
          alt: "Kitchen — Spacious, fully equipped kitchen with modern appliances for healthy meal preparation."
        },
        {
          src: "/images/willowbrook/5.png",
          alt: "Kitchen & Lounge — Open-plan kitchen and lounge area designed for convenience and social interaction."
        },
        {
          src: "/images/willowbrook/6.png",
          alt: "Dining Area — Cozy dining space with large windows providing natural light and a welcoming atmosphere."
        },
        {
          src: "/images/willowbrook/7.png",
          alt: "Office Space — Dedicated office area for staff, ensuring organized care coordination and communication."
        },
        {
          src: "/images/willowbrook/8.png",
          alt: "Hallway — Clean and well-lit hallway leading to private rooms, designed for accessibility and safety."
        },
        {
          src: "/images/willowbrook/9.png",
          alt: "Bedroom One — Comfortable private bedroom with ample storage and natural light for a homelike feel."
        },
        {
          src: "/images/willowbrook/10.png",
          alt: "Bedroom Two — Bright bedroom with cozy furnishings, offering comfort and privacy for residents."
        },
        {
          src: "/images/willowbrook/11.png",
          alt: "Bedroom Three — Spacious private bedroom with natural light, minimalist furnishings, and a comfortable setting."
        },
        {
          src: "/images/willowbrook/12.png",
          alt: "Walk-In Shower — Accessible shower with marble-style walls, grab bars, and bright natural lighting for safety."
        },
        {
          src: "/images/willowbrook/13.png",
          alt: "Bathroom One — Clean bathroom with shower, safety rails, and essential amenities for resident comfort."
        },
        {
          src: "/images/willowbrook/14.png",
          alt: "Bathroom Two — Modern bathroom with wide shower entry, skylight, and easy-access layout for safety."
        },
        {
          src: "/images/willowbrook/15.png",
          alt: "Backyard View  — Peaceful backyard area surrounded by greenery, featuring open space and a small shed."
        },
        {
          src: "/images/willowbrook/16.png",
          alt: "Safety Systems — On-site water storage and backup generator system ensuring resident safety and reliable care."
        }
      ]
    }
  ],
  complaints: {
    phone: "971-673-0540",
    email: "mailbox.hclc@odhsoha.oregon.gov",
    address: "800 NE Oregon St, Suite 465, Portland, OR 97232",
    web: "https://www.oregon.gov/oha"
  },
  languageAccess: {
    blurb: "Free language assistance and auxiliary aids are available upon request."
  },
  privacy: {
    contactEmail: "Danicareinc@outlook.com"
  }
};

export const getBranchBySlug = (slug: string): Branch | undefined => {
  return siteData.branches.find(branch => branch.slug === slug);
};

export const getAllBranches = (): Branch[] => {
  return siteData.branches;
};
