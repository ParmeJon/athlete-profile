const SPORTS_LIST = [
    {name: 'Golf'},
    {name: 'Tennis'},
    {name: 'Cricket'},
    {name: 'Basketball'},
    {name: 'Baseball'},
    {name: 'American Football'},
    {name: 'Aquatics'},
    {name: 'Archery'},
    {name: 'Automobile Racing'},
    {name: 'Badminton'},
    {name: 'Beach Volleyball'},
    {name: 'Bobsleigh'},
    {name: 'Body Building'},
    {name: 'Boxing'},
    {name: 'Cross Country Running'},
    {name: 'Cross Country Skiing'},
    {name: 'Curling'},
    {name: 'Cycling'},
    {name: 'Darts'},
    {name: 'Decathlon'},
    {name: 'Down Hill Skiing'},
    {name: 'Equestrianism'},
    {name: 'eSports'},
    {name: 'Fencing'},
    {name: 'Field Hockey'},
    {name: 'Figure Skating'},
    {name: 'Gymnastics'},
    {name: 'Ice Hockey'},
    {name: 'Martial Arts'},
    {name: 'Mixed Martial Arts'},
    {name: 'Modern Pentathlon'},
    {name: 'Motorcycle Racing'},
    {name: 'Netball'},
    {name: 'Polo'},
    {name: 'Racquetball'},
    {name: 'Rowing'},
    {name: 'Rugby'},
    {name: 'Sailing'},
    {name: 'Softball'},
    {name: 'Shooting'},
    {name: 'Skateboarding'},
    {name: 'Skeet Shooting'},
    {name: 'Skeleton'},
    {name: 'Snow Boarding'},
    {name: 'Soccer (Football)'},
    {name: 'Squash'},
    {name: 'Surfing'},
    {name: ' Swimming'},
    {name: 'Track and Field'}
]

const DATA_STEP_1 = {
    name: {type: 'text', placeholder: 'Name...'},
    sports: { type: 'select', options: SPORTS_LIST, placeholder: 'Sports'},
    nationality: { type: 'text', placeholder: 'American...'},
    gender: { type: 'text', placeholder: 'Gender...'},
    dob: { type: 'date', placeholder: 'Date of Birth...'},
}

const DATA_STEP_2 = {
  about: { type: "textarea", placeholder: "Description..." },
  interests: { type: "textarea", placeholder: "Interests..." },
  charities: { type: "textarea", placeholder: "Charities..." },
  location: { type: "text", placeholder: "Location..." },
  team: { type: "text", placeholder: "New York Giants..." },
  association: { type: "text", placeholder: "NFL..." },
  pets: { type: "text", placeholder: "Pets..." },
  married: { type: 'radio', options: ['yes', 'no']}
};

const DATA_STEP_3 = {
  facebook: { type: 'text', placeholder: "Social Media Links..." },
  twitter: { type: 'text', placeholder: "Social Media Links..." },
  instagram: {type: 'text', placeholder: 'Social Media Links...'},
  youtube: {type: 'text', placeholder: 'Social Media Links...'},
  twitch: {type: 'text', placeholder: 'Social Media Links...'},
  snapchat: {type: 'text', placeholder: 'Social Media Links...'},
};

const STEP_ITEMS = [
  { label: "Basic Info", data: DATA_STEP_1 },
  { label: "About", data: DATA_STEP_2 },
  { label: 'Handles', data: DATA_STEP_3 },
  { label: 'Review & Submit', data: {}},
];

export { STEP_ITEMS }