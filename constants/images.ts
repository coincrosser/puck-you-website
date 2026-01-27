
export const PUCK_IMAGES = {
  HERO_AVATAR: {
    url: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,quality=75,width=1000,height=1000/content/gallery-images/u0/d1936357-190b-484d-947b-11d2112469d4.jpg",
    base64: ""
  },
  GALLERY: [
    {
      id: "talking",
      url: "",
      base64: "",
      caption: "PUCK IS TALKING",
      tag: "VOICE"
    },
    {
      id: "wink",
      url: "", 
      base64: "",
      caption: "PUCK KNOWS SOMETHING",
      tag: "WINK"
    },
    {
      id: "neutral",
      url: "", 
      base64: "",
      caption: "STARE INTO THE ABYSS",
      tag: "IDLE"
    },
    {
      id: "happy",
      url: "", 
      base64: "",
      caption: "THRIFTY BLISS",
      tag: "HAPPY"
    },
    {
      id: "blink",
      url: "", 
      base64: "",
      caption: "PUCK REBOOTING",
      tag: "BLINK"
    },
    {
      id: "angry",
      url: "", 
      base64: "",
      caption: "DON'T TOUCH THE OCTOPUS",
      tag: "ANGRY"
    }
  ]
};

// runtime base64 map (populated by App at startup if puck-base64.json exists)
let BASE64_MAP: Record<string, string> | null = null;

export const applyBase64Map = (map: Record<string, string>) => {
  BASE64_MAP = map;
  // populate gallery items base64 when keys match
  PUCK_IMAGES.GALLERY = PUCK_IMAGES.GALLERY.map(item => ({
    ...item,
    base64: map[item.id] || item.base64 || ""
  }));
  // try to set hero avatar to neutral if available
  if (!PUCK_IMAGES.HERO_AVATAR.base64) {
    PUCK_IMAGES.HERO_AVATAR.base64 = map['neutral'] || PUCK_IMAGES.HERO_AVATAR.base64;
  }
};

export const getSrc = (imgObj: { url: string; base64?: string; id?: string }) => {
  // priority: explicit base64 on object > base64 map by id > url
  if (imgObj.base64 && imgObj.base64.length > 50) return imgObj.base64;
  if (imgObj.id && BASE64_MAP && BASE64_MAP[imgObj.id]) return BASE64_MAP[imgObj.id];
  return imgObj.url;
};
