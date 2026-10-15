export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  specs: string;
}

export interface ProgrammeItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  focus: string[];
  intensity: 'Balanced' | 'Moderate' | 'High Performance';
  sessionDuration: string;
  bestFor: string;
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  sampleBadge: string;
  focusAreas: string[];
  coachingPhilosophy: string;
  sessionFormat: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  tagline: string;
  popular?: boolean;
  features: string[];
}

export const GYM_INFO = {
  clubName: 'Apex Fitness Club',
  creatorStudio: 'Weblith Studio',
  conceptLabel: 'CONCEPT DEMO · CREATED BY WEBLITH STUDIO',
  city: 'Tohana, Haryana, India',
  address: 'Demo Address, Tohana, Haryana, India',
  phone: '+91 00000 00000',
  phoneDisplay: '+91 00000 00000 (Placeholder)',
  email: 'demo-contact@apexfitnessclub.example',
  hoursWeekday: '6:00 AM – 10:00 PM',
  hoursWeekend: '7:00 AM – 8:00 PM',
  disclaimer:
    'Apex Fitness Club is an interactive portfolio concept demo designed by Weblith Studio. All club details, plans, rates, trainer profiles, and opening hours are illustrative placeholders. No real memberships, monetary transactions, or fitness claims are implied.',
};

export const FACILITIES: FacilityItem[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    subtitle: 'Free Weights & Resistance Racks',
    description:
      'Engineered for compound lifting, progressive overload, and resistance work. Equipped with Olympic barbells, calibrated plates, heavy-duty power racks, and precision dumbbells.',
    image: '/src/assets/images/facility_strength_zone_1792073020749.jpg',
    highlights: ['Multi-station power cages', 'Olympic barbells & bumper plates', 'Dumbbell pairs up to 50kg', 'Dedicated deadlift platforms'],
    specs: '6 Dedicated Lifting Stations',
  },
  {
    id: 'cardio',
    title: 'Cardio Zone',
    subtitle: 'Aerobic & Conditioning Suite',
    description:
      'Curated aerobic suite positioned facing floor-to-ceiling perimeter windows with natural light. Features low-impact treadmills, indoor rowers, ski ergs, and curved sprint treadmills.',
    image: '/src/assets/images/facility_cardio_zone_1792073020832.jpg',
    highlights: ['Motorized & curved treadmills', 'Concept2 rowing machines', 'High-performance air bikes', 'Real-time workout telemetry monitors'],
    specs: '14 Aerobic Workstations',
  },
  {
    id: 'functional',
    title: 'Functional Training',
    subtitle: 'Turf Track & Athletic Movement',
    description:
      'A dedicated open turf sprint track and movement rig allowing unconstrained dynamic drills, sled pushes, kettlebell conditioning, and plyometric drills.',
    image: '/src/assets/images/facility_functional_turf_1792073022708.jpg',
    highlights: ['20-metre sled turf lane', 'Competition kettlebells & slam balls', 'Plyometric wooden vault boxes', 'Heavy battle ropes & suspension anchors'],
    specs: '20-Metre Sled Lane',
  },
  {
    id: 'classes',
    title: 'Group Classes',
    subtitle: 'Movement Studio & Structured Cohorts',
    description:
      'A shock-absorbent sprung oak floor studio tailored for coach-led cohort sessions, mobility clinics, athletic conditioning rounds, and structured group classes.',
    image: '/src/assets/images/facility_studio_classes_1792073021852.jpg',
    highlights: ['Acoustic insulation & ambient lights', 'High-density workout mats', 'Full-length coaching mirror line', 'Integrated audio pacing system'],
    specs: 'Capacity for 18 Participants',
  },
  {
    id: 'stretching',
    title: 'Stretching Area',
    subtitle: 'Recovery, Decompression & Cooldown',
    description:
      'Quiet, designated decompression zone equipped with firm yoga mats, trigger-point foam rollers, resistance mobility bands, and decompression stall bars.',
    image: '/src/assets/images/hero_gym_apex_1792073019888.jpg',
    highlights: ['High-density recovery mats', 'Deep-tissue foam rollers', 'Dynamic resistance bands', 'Low-stimulation calm lighting'],
    specs: 'Decompression & Recovery Zone',
  },
];

export const PROGRAMMES: ProgrammeItem[] = [
  {
    id: 'strength-foundations',
    name: 'Strength Foundations',
    category: 'Resistance & Mechanics',
    summary:
      'A methodical approach to compound barbell, dumbbell, and bodyweight fundamentals, focusing on biomechanics, proper posture, and progressive overload.',
    focus: ['Squat, bench & hinge mechanics', 'Consistent lifting technique', 'Structural core stability'],
    intensity: 'Moderate',
    sessionDuration: '50–60 mins',
    bestFor: 'Individuals seeking structured lifting habits and foundational physical strength.',
  },
  {
    id: 'general-fitness',
    name: 'General Fitness',
    category: 'Daily Well-being & Conditioning',
    summary:
      'A balanced, full-body training template designed to support everyday energy, functional posture, cardiovascular endurance, and healthy movement patterns.',
    focus: ['Compound movement variety', 'Cardiovascular stamina', 'Postural alignment'],
    intensity: 'Balanced',
    sessionDuration: '45–55 mins',
    bestFor: 'Those who want consistent, accessible weekly movement without excessive fatigue.',
  },
  {
    id: 'functional-training',
    name: 'Functional Training',
    category: 'Athletic Conditioning',
    summary:
      'Multi-planar athletic sessions that challenge coordination, agility, and stamina using kettlebells, sled pushes, bodyweight intervals, and agility ladders.',
    focus: ['Multi-directional movement', 'Work-to-rest pacing', 'Power transfer & mobility'],
    intensity: 'High Performance',
    sessionDuration: '45 mins',
    bestFor: 'Athletes and fitness enthusiasts who appreciate high-tempo, varied workouts.',
  },
  {
    id: 'mobility-conditioning',
    name: 'Mobility & Conditioning',
    category: 'Flexibility & Joint Health',
    summary:
      'A dedicated programme blending joint range-of-motion routines, controlled breathing, myofascial release, and light aerobic intervals to support overall recovery.',
    focus: ['Hip & shoulder range of motion', 'Active joint control', 'Breathwork & decompression'],
    intensity: 'Balanced',
    sessionDuration: '40–50 mins',
    bestFor: 'Members prioritizing active joint health, cooldowns, and movement longevity.',
  },
];

export const SAMPLE_TRAINERS: TrainerProfile[] = [
  {
    id: 't-1',
    name: 'Kabir Verma',
    role: 'Strength Coaching Guide',
    sampleBadge: 'Sample Profile · Fictional',
    focusAreas: ['Compound Lifting Fundamentals', 'Posture & Stance Coaching', 'Progressive Overload Planning'],
    coachingPhilosophy:
      'Emphasizes patience, clean form, and sustainable cadence over rushed milestones. Dedicated to building confident movement in the free-weight room.',
    sessionFormat: 'One-on-one fundamentals & small cohort lifting clinics',
  },
  {
    id: 't-2',
    name: 'Ananya Deshmukh',
    role: 'Functional & Movement Facilitator',
    sampleBadge: 'Sample Profile · Fictional',
    focusAreas: ['Athletic Turf Drills', 'Kettlebell Movement Technique', 'Conditioning Cohorts'],
    coachingPhilosophy:
      'Focuses on fluid multi-planar movement, agility, and maintaining energy throughout weekly training blocks.',
    sessionFormat: 'Functional turf cohorts & conditioning circuits',
  },
  {
    id: 't-3',
    name: 'Marcus Chen',
    role: 'Mobility & Recovery Specialist',
    sampleBadge: 'Sample Profile · Fictional',
    focusAreas: ['Joint Range of Motion', 'Active Decompression', 'Breath Pacing & Cooldowns'],
    coachingPhilosophy:
      'Believes structured recovery and joint preparation form the backbone of long-term physical consistency and injury prevention.',
    sessionFormat: 'Mobility workshops & assisted stretch guidance',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 999,
    quarterlyPrice: 2699,
    tagline: 'Essential access for disciplined independent gym training.',
    features: [
      'Full floor access to Strength & Cardio zones',
      'Access during regular club operating hours',
      'Locker room & hydration station access',
      'Introductory club floor orientation walk-through',
      'Illustrative sample plan — no real billing',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    monthlyPrice: 1499,
    quarterlyPrice: 3999,
    tagline: 'Comprehensive access with studio classes and mobility slots.',
    popular: true,
    features: [
      'Full access to all 5 club facility zones',
      'Unlimited scheduled group studio classes',
      'Turf track & functional conditioning area access',
      'Complimentary monthly training check-in guide',
      'Peak and off-peak operating hours access',
      'Illustrative sample plan — no real billing',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    monthlyPrice: 1999,
    quarterlyPrice: 5399,
    tagline: 'Full-tier illustrative experience with coaching clinic slots.',
    features: [
      'All Standard plan features included',
      'Priority reservation for small cohort lifting clinics',
      'Dedicated guest day pass each calendar month',
      'Stretching & recovery lounge priority booking',
      'Apex locker storage reservation',
      'Illustrative sample plan — no real billing',
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Main Strength & Free Weights Arena',
    category: 'Strength',
    image: '/src/assets/images/facility_strength_zone_1792073020749.jpg',
    caption: 'Precision matte steel power racks and bumper plate stations calibrated for compound resistance training.',
  },
  {
    id: 'g-2',
    title: 'Natural Light Cardio Suite',
    category: 'Cardio',
    image: '/src/assets/images/facility_cardio_zone_1792073020832.jpg',
    caption: 'Treadmills and indoor ergometers oriented along panoramic perimeter glazing for focused endurance conditioning.',
  },
  {
    id: 'g-3',
    title: 'Sprint & Sled Turf Lane',
    category: 'Functional',
    image: '/src/assets/images/facility_functional_turf_1792073022708.jpg',
    caption: 'High-density athletic turf track designed for sled drives, battle ropes, and multi-directional drills.',
  },
  {
    id: 'g-4',
    title: 'Sprung Oak Movement Studio',
    category: 'Studio',
    image: '/src/assets/images/facility_studio_classes_1792073021852.jpg',
    caption: 'Architectural studio space with full-length coaching mirrors and high-density mobility gear.',
  },
  {
    id: 'g-5',
    title: 'Main Athletic Facility Concourse',
    category: 'Overview',
    image: '/src/assets/images/hero_gym_apex_1792073019888.jpg',
    caption: 'Central training hall showcasing charcoal industrial structural framing with electric lime accents.',
  },
];
