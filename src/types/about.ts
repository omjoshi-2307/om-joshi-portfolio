export interface PersonalInterest {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  iconName: 'football' | 'anime' | 'music';
}

export interface AboutMetadataItem {
  label: string;
  value: string;
  detail?: string;
  icon?: string;
}

export interface AboutSectionData {
  eyebrow: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  statement: {
    lead: string;
    highlight: string;
    sub: string;
  };
  reflectionQuote: {
    quote: string;
    context: string;
  };
  narrative: {
    id: string;
    stageLabel: string;
    headline: string;
    content: string;
  }[];
  metadata: {
    location: AboutMetadataItem;
    education: AboutMetadataItem;
    orientation: AboutMetadataItem;
  };
  interestsSectionTitle: string;
  interestsSectionEyebrow: string;
  interests: PersonalInterest[];
  closing: {
    preamble: string;
    headline: string;
    actionText: string;
    targetId: string;
  };
}
