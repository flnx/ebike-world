export const generateRandomBike = () => {
  let randomIndex = Math.round(Math.random() * 3);

  let bikes = Object.keys(bikesData);
  let bike = bikes[randomIndex];

  return bikesData[bike];
};

const bikesData = {
  bikeOne: {
    brand: 'Cowboy',
    model: 'Yee-CLAW X',
    description: `We didn't call this ebike the Sinch for no reason. Foldable, portable, storable, powerful, comfortable, and ready for anything, the Sinch folding electric bike will fit in a closet or under a desk, meaning it’s infinitely portable! Making this electric bike foldable means that it'll even fit in the trunk of a car or easily into an RV so it can go anywhere with you.
  
    Its powerful motor and stealthily integrated battery mean that you'll never be short of power, our intuitive color display means you can view real-time riding data right at your fingertips, and 5 levels of pedal assist and a no-nonsense, no-need-to-pedal throttle mean that you can go as hard or as light as you want. With 4" fat tires and a front suspension fork, this ebike is ready to both cruise the pavements and conquer the trails!
    `,
    weight: 20,
    weightLimit: 130,
    posterUrls: {
        imgName1: 'https://res.cloudinary.com/degidchop/image/upload/s--BHgYJoYG--/f_auto,q_auto/v1/ebikesworld/hyrkahhpr2w9kaippe0k',
        imgName2: 'https://res.cloudinary.com/degidchop/image/upload/s--10w7CmyG--/f_auto,q_auto/v1/ebikesworld/rcwydloa5j2xpvimrhn2',
        imgName3: 'https://res.cloudinary.com/degidchop/image/upload/s--0reBAm2i--/f_auto,q_auto/v1/ebikesworld/pqzaqb113upsdooah0iz',
        imgName4: 'https://res.cloudinary.com/degidchop/image/upload/s--zHUk-59k--/f_auto,q_auto/v1/ebikesworld/otelbdxcgvvofg0pavss',
        imgName5: 'https://res.cloudinary.com/degidchop/image/upload/s--yY_mGBCl--/f_auto,q_auto/v1/ebikesworld/tkzc1g7o1cs4ebfsfelb',
        imgName6: 'https://res.cloudinary.com/degidchop/image/upload/s--HxAjmnSn--/f_auto,q_auto/v1/ebikesworld/h1iwezmozyeagfaqribx',
    },
    batteryWeight: 4,
    fork: 'Front suspension, 45mm travel, with lockout',
    battery: 'Removable Lithium-ion 48V, 14Ah (672 Wh)',
    displayUnit:
      'BC280 LCD Smart Easy Read Display with Backlight, Colorful screen with app',
    chain: '8 Speed',
    brakes: 'Mechanical Disc Brakes, 180mm rotors',
    rims: 'Aluminum 36h Front & Rear',
    tires: '700c*35c Kenda K193',
    frame: 'Sloping frame',
    enginePower: '750W brushless geared hub motor, 5:1 planetary gear reduction',
    range: 90,
    speed: 45,
    charger:
      '48V, 2 Amp Rad Power Bikes smart charger, operates on 100V-240V AC power outlets',
    price: 2199,
  },
  bikeTwo: {
    brand: 'Wall',
    model: '-E-',
    description: `As beautifully elegant as it is rugged the Aventure is the most powerful and versatile ebike we’ve ever designed. With a front suspension fork, fat tires, and exceptional handling you can be sure of the most comfortable ride across whichever terrain your spirit chooses, whilst built in fenders and integrated front and rear lights ensure that wherever you go you’ll be both seen by others and protected from the terrain beneath you.

    While the Aventure ships as a class II ebike, it can be configured into a class III with its high capacity battery and powerful rear hub motor. Topping it off with its color display that syncs to the new Aventon app means that this bike is first in its class and packed full of the technological innovation required for it to stand up to the test of time.
    `,
    weight: 22,
    weightLimit: 150,
    posterUrls: {
      "imgName1": "https://res.cloudinary.com/degidchop/image/upload/s--4Ya6HkuY--/f_auto,q_auto/v1/ebikesworld/pbscw9vkblt2xrcoum4r",
      "imgName2": "https://res.cloudinary.com/degidchop/image/upload/s--u5-kYVmc--/f_auto,q_auto/v1/ebikesworld/c2zbqwecbwz31smdt55m",
      "imgName3": "https://res.cloudinary.com/degidchop/image/upload/s--eWUkKukF--/f_auto,q_auto/v1/ebikesworld/bvh3120egilxb01tccq1",
      "imgName4": "https://res.cloudinary.com/degidchop/image/upload/s--LhCGZ-yw--/f_auto,q_auto/v1/ebikesworld/xvp7enadzamhe9mwgrko",
      "imgName5": "https://res.cloudinary.com/degidchop/image/upload/s--UED0Pd7D--/f_auto,q_auto/v1/ebikesworld/ciglbm9rqpz2nxcbfrg4",
      "imgName6": "https://res.cloudinary.com/degidchop/image/upload/s--vuHQ0ZTt--/f_auto,q_auto/v1/ebikesworld/qqb5yvxtxdx157hrv6k5"
    },
    batteryWeight: 4,
    fork: 'RST spring fork, 60 mm travel with lockout and preload adjustment, 277 mm steerer tube',
    battery: 'Samsung lithium-ion battery with 840Wh',
    displayUnit:
      'Backlit LCD with charge indicator, speedometer, odometer, trip odometer, pedal assist level, clock, and more',
    chain: 'Soltera Single Speed - Single Speed, Soltera 7 Speed - 7 Speed',
    brakes: 'Soltera 7 Speed - Tektro Mechanical Disc Brakes, 160mm Rotors',
    rims: '6061 aluminum alloy',
    tires: '29 inch Kenda Juggernaut fat tyres',
    frame: '6061 Double-Butted Aluminum Alloy with Internal Battery',
    enginePower: '1130W (Peak) 750W (Sustained), 48V Brushless Rear Hub Motor',
    range: 70,
    speed: 32,
    charger: 'Samsung Charger',
    price: 2499,
  },
  bikeThree: {
    brand: 'Machina',
    model: 'S3',
    weight: 19,
    weightLimit: 120,
    description: `The electric chopper bike owes its look to the rugged Chopper motorbikes on which it is based. The 840Wh Samsung cells battery integrated into the frame, the extra large retro headlight and the thick tyres make this electric bike look more like a chopper than a regular bicycle. This chopper bike is therefore not for the average rider, but for anyone who doesn't mind attracting a lot of attention. Because that is exactly what will happen when you ride this cool electric chopper bicycle. Thanks to the unique look and the thick tyres, you will receive a lot of envious glances. With the thick tyres, you can easily ride through forest paths or through the city. The thick tyres provide extra shock absorption and the seat post also has suspension, which makes every ride extremely comfortable. In addition, the low and extra wide saddle combined with a higher handlebar gives you a relaxed riding position.`,
    posterUrls: {
      imgName1: 'https://res.cloudinary.com/degidchop/image/upload/s--6uJZrZxp--/f_auto,q_auto/v1/ebikesworld/wqvua3pmzt71tzpbs3wk',
      imgName2: 'https://res.cloudinary.com/degidchop/image/upload/s--plvxrK5K--/f_auto,q_auto/v1/ebikesworld/qdq0bwvdrczrj6zs1jy7',
      imgName3: 'https://res.cloudinary.com/degidchop/image/upload/s--rz8GfeD_--/f_auto,q_auto/v1/ebikesworld/g2l3em9wurlwjclp2ohb',
      imgName4: 'https://res.cloudinary.com/degidchop/image/upload/s--t5-T9sQ1--/f_auto,q_auto/v1/ebikesworld/qrgjtorsgod9nlo6vhiq',
      imgName5: 'https://res.cloudinary.com/degidchop/image/upload/s--eLBOvAoP--/f_auto,q_auto/v1/ebikesworld/i5co8ygdpsn9up6tkbre',
      imgName6: 'https://res.cloudinary.com/degidchop/image/upload/s--ebTSRqgl--/f_auto,q_auto/v1/ebikesworld/picwenhr80mcahoelxcx',
    },
    batteryWeight: 3,
    fork: 'Rigid, Saddle post suspension',
    battery: 'Samsung lithium-ion battery with 840Wh',
    displayUnit: 'Bigstone LCD C900E 3.5 colour display',
    chain: 'KMC Z7 (8 Speed)',
    brakes: 'with motor cutoff switch and adjustable reach (2.5mm Allen wrench)',
    rims: '6061 aluminum alloy',
    tires: 'Double-wall aluminum alloy, 36 hole Rim width: 75 mm',
    frame: '6061 Double-Butted Aluminum Alloy with Internal Battery',
    enginePower: '1130W (Peak) 750W (Sustained), 48V Brushless Rear Hub Motor',
    range: 65,
    speed: 32,
    charger: 'Samsung Charger',
    price: 2548,
  },
  bikeFour: {
    brand: 'Ghost',
    model: 'Rider',
    description: `A sleek, single-speed electric bike (also available in a 7 speed) that is nimble and powerful enough to weave through the jungles of the city yet lightweight enough to carry up a flight of stairs after a day’s work.
  
  The elegant and minimalist design is reminiscent of Aventon's performance cycling roots, but with an electric charge. The performance-inspired geometric frame allows for a more aggressive riding style with room to still enjoy a relaxing ride.
  
  Maneuver your way through the city with the help of the stealthy yet powerful motor, equipped with both a throttle and pedal assist. Or if you're looking for a bit of a challenge, ride the Soltera using your own force and will. The choice is yours.
  `,
    weight: 24,
    weightLimit: 120,
    posterUrls: {
      imgName1: 'https://res.cloudinary.com/degidchop/image/upload/s--jlQj0JVN--/f_auto,q_auto/v1/ebikesworld/uxqnfebgt0tx3gdl00k2',
      imgName2: 'https://res.cloudinary.com/degidchop/image/upload/s--HhXFJZ6u--/f_auto,q_auto/v1/ebikesworld/hkfi4fzex2clmeguyapg',
      imgName3: 'https://res.cloudinary.com/degidchop/image/upload/s--lk37ZYwL--/f_auto,q_auto/v1/ebikesworld/hvgz1ezxk5vxzknufzbi',
      imgName4: 'https://res.cloudinary.com/degidchop/image/upload/s--xU1RrGP---/f_auto,q_auto/v1/ebikesworld/wapmpeuapxtd2czpjqt0',
      imgName5: 'https://res.cloudinary.com/degidchop/image/upload/s---jVU55Ki--/f_auto,q_auto/v1/ebikesworld/s03wgwzk7qfo9skhnzwj',
      imgName6: 'https://res.cloudinary.com/degidchop/image/upload/s--sPQWYcLl--/f_auto,q_auto/v1/ebikesworld/lh3pqclhailihpqz8577',
    },
    batteryWeight: 4,
    fork: 'Suspension Fork with 80mm travel, with lockout',
    battery: 'Removable Internal Lithium-ion 48V, 15Ah (720Wh)',
    displayUnit: 'Backlit LCD with charge indicator, speedometer, odometer, trip odometer, pedal assist level, clock, and more',
    chain: '9 Speed',
    brakes: '180 mm TEKTRO hydraulic',
    rims: '6061 aluminum alloy',
    tires: '24 inch, 26 inch',
    frame: '6061 Double-Butted Aluminum Alloy with Internal Battery',
    enginePower: '36V, 350W (Nominal) brushless rear hub motor',
    range: 100,
    speed: 32,
    charger: 'Included is a 48V 3 Amp Fast Charger, 4-5 Hour Charging',
    price: 2548,
  },
};
