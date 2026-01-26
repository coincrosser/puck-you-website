
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

export const getSrc = (imgObj: { url: string; base64?: string }) => {
  if (imgObj.base64 && imgObj.base64.length > 50) {
    return imgObj.base64;
  }
  return imgObj.url;
};
