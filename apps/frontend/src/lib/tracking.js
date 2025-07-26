import mixpanel from "mixpanel-browser";

mixpanel.init("b063a507dd944bf1f7aaecb84d2a30e0", {
  debug: import.meta.env.VITE_MIXPANEL_DEBUG === "true", // false in production
  track_pageview: true, // tracks page reloads
  persistence: "localStorage",
  ignore_dnt: true,
});

export const trackEvent = (eventName, properties = {}) => {
  mixpanel.track(eventName, properties);
};  
export const identifyUser = (user) => {
  mixpanel.identify(user.id);
  mixpanel.people.set({
    $email: user.email,
    name: user.name,
    role: user.role,
  });
};
