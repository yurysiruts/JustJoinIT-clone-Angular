export interface CurrentUserInterface {
  avatar: {
    thumb_url: string;
    url: string;
  };
  city: string | null;
  complete_profile: boolean;
  cv: null;
  description: string | null;
  email: string;
  experience_range: string | null;
  first_name: string;
  github_url: string | null;
  id: string | number;
  last_name: string;
  linkedin_url: string | null;
  status: string;
}
