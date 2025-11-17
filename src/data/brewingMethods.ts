export interface Step {
  id: number;
  title: string;
  description: string;
  duration?: number; // in seconds
  instructions: string[];
  tips?: string[];
  image?: string;
}

export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  totalTime: number; // in minutes
  equipment: string[];
  recipe: {
    coffee: string;
    water?: string;
    ratio: string;
    grindSize: string;
    temperature?: string;
    pressure?: string;
    yield?: string;
  };
  steps: Step[];
}

export const brewingMethods: Record<string, BrewingMethod> = {
  v60: {
    id: 'v60',
    name: 'V60 Pour-Over',
    description: 'Single cup precision brewing with James Hoffmann\'s technique',
    difficulty: 'Intermediate',
    totalTime: 3.5,
    equipment: [
      'Hario V60 dripper',
      'V60 paper filter',
      'Gooseneck kettle',
      'Digital scale',
      'Timer',
      'Freshly roasted coffee',
      'Burr grinder',
      'Filtered water'
    ],
    recipe: {
      coffee: '20g medium-fine grind',
      water: '300ml at 93-96°C (200-205°F)',
      ratio: '1:15',
      grindSize: 'Table salt consistency',
      temperature: '93-96°C (200-205°F)',
      yield: '300ml coffee'
    },
    steps: [
      {
        id: 1,
        title: 'Prepare Equipment',
        description: 'Set up your V60 and rinse the filter',
        duration: 30,
        instructions: [
          'Place the V60 dripper on a mug or carafe',
          'Insert a paper filter and rinse with hot water',
          'Discard the rinse water to remove paper taste',
          'Preheat the dripper'
        ],
        tips: [
          'Use filtered water for best results',
          'The rinse water preheats the dripper and mug'
        ]
      },
      {
        id: 2,
        title: 'Measure and Grind Coffee',
        description: 'Weigh and grind your coffee beans',
        instructions: [
          'Measure 20g of freshly roasted coffee beans',
          'Grind to medium-fine consistency (like table salt)',
          'Place grounds in the filter, creating a slight well in center'
        ],
        tips: [
          'Grind just before brewing for maximum freshness',
          'The well in the center helps with even water distribution'
        ]
      },
      {
        id: 3,
        title: 'Bloom',
        description: 'Start the bloom phase to degas the coffee',
        duration: 45,
        instructions: [
          'Start your timer as you begin pouring',
          'Pour approximately 40g (2x coffee weight) of water evenly over the coffee',
          'Ensure all grounds are fully saturated - you should see them expand and bubble',
          'Allow the coffee to bloom for 30-45 seconds'
        ],
        tips: [
          'The bloom allows CO₂ to escape and coffee grounds to expand',
          'This phase is crucial for even extraction and flavor development',
          'If you see vigorous bubbling, the coffee is very fresh'
        ]
      },
      {
        id: 4,
        title: 'First Pour',
        description: 'Begin the main extraction pour',
        duration: 30,
        instructions: [
          'After the bloom, continue pouring water in a slow, steady circular motion',
          'Pour in a spiral pattern from the center outward, then back to center',
          'Pour until your scale reads 150g total (110g additional water)',
          'This pour should take approximately 30 seconds'
        ],
        tips: [
          'Maintain a consistent water level - don\'t let it drop too low',
          'Pour height should be 2-3 inches above the coffee bed',
          'The spiral motion ensures even extraction across all grounds'
        ]
      },
      {
        id: 5,
        title: 'Second Pour',
        description: 'Continue extraction as water level drops',
        instructions: [
          'Wait for the water level to drop slightly (about halfway down)',
          'Continue pouring in the same circular pattern',
          'Pour until your scale reads 220g total (70g additional water)',
          'Maintain steady, controlled pour rate'
        ],
        tips: [
          'Watch the water level - pour when it drops but before it fully drains',
          'This phase extracts the body and mid-range flavors',
          'Consistent pour rate is more important than speed'
        ]
      },
      {
        id: 6,
        title: 'Final Pour',
        description: 'Complete the extraction to target weight',
        instructions: [
          'When water level drops again, complete your final pour',
          'Pour until your scale reads 300g total (80g additional water)',
          'Maintain the same circular pouring pattern',
          'Stop pouring when you reach 300g total'
        ],
        tips: [
          'The final pour extracts the remaining soluble compounds',
          'Total brew time from start should be around 3-3.5 minutes',
          'Don\'t worry if you go slightly over - consistency is key'
        ]
      },
      {
        id: 7,
        title: 'Draw Down',
        description: 'Allow complete extraction',
        instructions: [
          'Allow water to draw down completely',
          'Total brew time should be 3-3.5 minutes',
          'Remove the dripper and enjoy your coffee'
        ],
        tips: [
          'If brew time is too short, grind finer next time',
          'If brew time is too long, grind coarser'
        ]
      }
    ]
  },
  flair: {
    id: 'flair',
    name: 'Flair Espresso',
    description: 'Manual lever espresso with precise pressure control',
    difficulty: 'Advanced',
    totalTime: 3,
    equipment: [
      'Flair Espresso Maker',
      'Burr grinder',
      'Digital scale',
      'Tamper',
      'Kettle',
      'Freshly roasted espresso beans',
      'Filtered water'
    ],
    recipe: {
      coffee: '18-20g fine grind',
      water: 'Near-boiling (198-208°F / 92-98°C)',
      ratio: '1:1.5-2',
      grindSize: 'Espresso consistency (finer than table salt)',
      temperature: '198-208°F (92-98°C)',
      pressure: '6-9 BAR',
      yield: '30-40g espresso'
    },
    steps: [
      {
        id: 1,
        title: 'Preheat Components',
        description: 'Prepare the Flair for optimal brewing temperature',
        instructions: [
          'Fill the brew head with near-boiling water and let it sit for 1-2 minutes',
          'Preheat the portafilter basket with hot water',
          'Preheat the base and any other metal components',
          'Dump the preheat water and ensure all components are warm to touch'
        ],
        tips: [
          'Proper preheating is crucial - cold components will drop extraction temperature significantly',
          'Warm components prevent temperature loss during the shot pull',
          'Some users preheat multiple times for maximum temperature stability'
        ]
      },
      {
        id: 2,
        title: 'Measure and Grind Coffee',
        description: 'Prepare your coffee dose',
        instructions: [
          'Measure 18-20g of freshly roasted espresso beans',
          'Grind to fine consistency (espresso grind)',
          'Dose evenly into the portafilter'
        ],
        tips: [
          'Grind immediately before brewing',
          'Even dosing ensures consistent extraction'
        ]
      },
      {
        id: 3,
        title: 'Tamp',
        description: 'Compress the coffee grounds evenly',
        instructions: [
          'Place the portafilter on a stable, level surface',
          'Hold the tamper level and apply even pressure (about 15-20 lbs or 7-9 kg)',
          'Rotate the tamper slightly while maintaining pressure to polish the surface',
          'Wipe any coffee grounds from the portafilter rim with your finger'
        ],
        tips: [
          'Even tamping is critical - uneven pressure causes channeling',
          'Consistent pressure is more important than maximum force',
          'A polished, level surface ensures even water distribution'
        ]
      },
      {
        id: 4,
        title: 'Assemble Flair',
        description: 'Set up the brew head',
        instructions: [
          'Attach the portafilter to the brew head',
          'Secure it tightly in place',
          'Ensure proper alignment'
        ],
        tips: [
          'Proper assembly prevents leaks',
          'The portafilter should be firmly attached'
        ]
      },
      {
        id: 5,
        title: 'Add Water',
        description: 'Fill the brew chamber',
        instructions: [
          'Heat water to near-boiling (198-208°F)',
          'Fill the brew chamber with hot water',
          'Ensure the water level is correct'
        ],
        tips: [
          'Water temperature affects extraction',
          'Too hot can cause bitter coffee, too cool causes weak coffee'
        ]
      },
      {
        id: 6,
        title: 'Extract Espresso',
        description: 'Pull your shot with controlled pressure',
        duration: 35,
        instructions: [
          'Begin applying pressure slowly to the lever - aim for 2-3 BAR initially',
          'Once coffee starts flowing, increase to 6-9 BAR and maintain steady pressure',
          'Watch the flow - it should be a steady stream, not drips or gushes',
          'Aim for 25-35 seconds total extraction time from first drop',
          'Stop when you reach your target yield (30-40g for a double shot)'
        ],
        tips: [
          'Steady, consistent pressure prevents channeling and ensures even extraction',
          'If extraction is too fast (<20s), grind finer next time',
          'If extraction is too slow (>40s), grind coarser next time',
          'The first drops should appear around 5-10 seconds after starting pressure'
        ]
      },
      {
        id: 7,
        title: 'Serve',
        description: 'Enjoy your espresso',
        instructions: [
          'Remove the portafilter',
          'Clean the portafilter immediately',
          'Serve the espresso immediately'
        ],
        tips: [
          'Clean equipment prevents flavor carryover',
          'Espresso is best served immediately'
        ]
      }
    ]
  },
  moka: {
    id: 'moka',
    name: 'Moka Pot',
    description: 'Classic stovetop brewing for rich, bold coffee',
    difficulty: 'Beginner',
    totalTime: 6,
    equipment: [
      'Moka pot (Bialetti or similar)',
      'Burr grinder',
      'Freshly roasted coffee beans',
      'Filtered water',
      'Stove'
    ],
    recipe: {
      coffee: '15-17g medium-fine grind',
      water: 'Hot water up to safety valve',
      ratio: '1:12-15',
      grindSize: 'Between drip and espresso grind',
      temperature: 'Hot (not boiling)',
      yield: '150-200ml coffee'
    },
    steps: [
      {
        id: 1,
        title: 'Fill Bottom Chamber',
        description: 'Add water to the Moka pot base',
        instructions: [
          'Fill the bottom chamber with filtered water',
          'Fill up to just below the safety valve (never above it)',
          'Using hot (not boiling) water will speed up the brewing process',
          'Check that the safety valve is clean and functioning'
        ],
        tips: [
          'Water level is critical for safety - exceeding the valve can cause dangerous pressure buildup',
          'Hot water reduces brewing time and prevents the coffee from sitting on heat too long',
          'Filtered water improves taste and prevents mineral buildup'
        ]
      },
      {
        id: 2,
        title: 'Insert Filter Basket',
        description: 'Prepare the coffee basket',
        instructions: [
          'Insert the filter basket into the bottom chamber',
          'Ensure it sits securely',
          'Do not tamper or press down the coffee'
        ],
        tips: [
          'The filter basket must be properly seated',
          'Never compress the coffee grounds'
        ]
      },
      {
        id: 3,
        title: 'Add Coffee',
        description: 'Fill the basket with ground coffee',
        instructions: [
          'Measure 15-17g of freshly roasted coffee beans',
          'Grind to medium-fine consistency (similar to table salt, but slightly coarser than espresso)',
          'Fill the filter basket completely and level the surface with your finger',
          'Do not tamp or compress the coffee - just level it'
        ],
        tips: [
          'Grind size is crucial - too fine causes over-extraction and bitter coffee',
          'Too coarse results in weak, under-extracted coffee',
          'Level grounds ensure even water flow and extraction',
          'Never tamp Moka pot coffee - it will create too much resistance'
        ]
      },
      {
        id: 4,
        title: 'Assemble',
        description: 'Put the Moka pot together',
        instructions: [
          'Screw the upper chamber onto the bottom',
          'Ensure it is tightly assembled',
          'Check for any gaps or leaks'
        ],
        tips: [
          'Proper assembly prevents leaks',
          'Tight seal is essential for pressure building'
        ]
      },
      {
        id: 5,
        title: 'Heat',
        description: 'Start brewing on the stove',
        instructions: [
          'Place on medium heat',
          'Monitor the brewing process',
          'Coffee will start flowing into upper chamber'
        ],
        tips: [
          'Medium heat prevents burning',
          'Watch for the first drops of coffee'
        ]
      },
      {
        id: 6,
        title: 'Monitor and Adjust',
        description: 'Control the brewing process carefully',
        instructions: [
          'Once coffee starts flowing into the upper chamber, immediately reduce heat to low-medium',
          'Watch the flow - it should be a steady, honey-colored stream',
          'If the stream is too fast and foamy, reduce heat further',
          'If it\'s too slow or stops, slightly increase heat',
          'Listen for the characteristic gurgling/hissing sound'
        ],
        tips: [
          'Heat control is the key to great Moka pot coffee',
          'Too much heat causes over-extraction and bitter coffee',
          'The gurgling sound indicates proper pressure is building',
          'A steady, controlled flow produces the best results'
        ]
      },
      {
        id: 7,
        title: 'Finish and Remove',
        description: 'Complete the brewing at the right moment',
        instructions: [
          'When the coffee stream becomes lighter in color and the hissing becomes louder, remove from heat',
          'The upper chamber should be nearly full (leave about 1cm from the top)',
          'Run the bottom chamber under cold water to stop extraction immediately',
          'Pour the coffee into cups right away to prevent over-extraction from residual heat'
        ],
        tips: [
          'Removing at the right time prevents bitter, over-extracted coffee',
          'The cold water trick stops extraction instantly',
          'Serve immediately - Moka pot coffee is best when fresh and hot',
          'If you see dark, oily coffee at the end, you removed it too late'
        ]
      },
      {
        id: 8,
        title: 'Clean',
        description: 'Clean your Moka pot',
        instructions: [
          'Allow to cool completely before cleaning',
          'Disassemble all parts',
          'Wash with hot water (no soap for aluminum pots)',
          'Dry thoroughly before storage'
        ],
        tips: [
          'Proper cleaning prevents flavor carryover',
          'Never use soap on aluminum Moka pots'
        ]
      }
    ]
  }
};
