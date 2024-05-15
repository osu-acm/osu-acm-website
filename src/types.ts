export interface Resource {
      title: string;
      text: string;
      link: string;
      tags?: string[];
}

export interface CompetitiveProgrammingResource extends Resource {
      difficulty?: string;
}

export interface WebDevelopmentResource extends Resource {
      type?: string;
}

export interface OsuResource extends Resource {
      type?: string;
}

export interface SecurityResource extends Resource {
      type?: string;  
}

export interface Event {
      date: string;
      time: string;
      location: string;
      title: string;
    description: string;
    zoomLink?: string;
    pin?: string;
}



