// TODO: fix types for nationality and travelLocation

/**
 * Details about a user's travel location and preferences.
 */
export type LocationDetails = {
  /** * The user's nationality (e.g., 'Nigerian'). */
  nationality: any;
  /** The location the user is traveling to (e.g., 'France'). */
  travelLocation: any;
  /** The reason for travel (e.g., 'Business', 'Vacation'). */
  travelReason: string;
  /** The language spoken or preferred by the user (e.g., 'English'). */
  language: string;
};
